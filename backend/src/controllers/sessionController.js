import Session from "../models/Session.js";
import { chatClient, streamClient } from "../lib/stream.js";
export async function createSession(req, res) {
    // Implementation for creating a session
    try{
        const {problem,difficulty} = req.body;
        const userId = req.user._id;
        const clerkId = req.user.clerkId;

        if(!problem || !difficulty){
            return res.status(400).json({error: 'Problem and difficulty are required'});
        }

        // generate a unique callId for the stream video call
        const callId=`session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        // create session in DB
        const session= await Session.create({
            problem,
            difficulty,
            host:userId,
            callId
        });

        // create a Stream video call (assuming StreamClient is properly set up)
        await StreamClient.video.call('default', callId).getOrCreate({
            data:{
                created_by_id:clerkId,
                custom:{problem,difficulty,sessionId:session._id.toString()}
            }
        });

        // chat channel can be created here
        const channel = chatClient.channel('messaging', callId, {
            name:`${problem} Session`,
            created_by_id:clerkId,
            members:[clerkId]
        });
        await channel.create();

        return res.status(201).json({session}); 

    }catch(error){
        console.error('Error creating session:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
export async function getActiveSessions(_, res) {
    // Implementation for getting active sessions
    try{
        const sessions = await Session.find({status:'active'})
        .populate('host','name profileImage email clerkId')
        .sort({createdAt:-1})
        .limit(20);

        return res.status(200).json({sessions});
    }catch(error){
        console.error('Error fetching active sessions:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
export async function getMyRecentSessions(req, res) {
    // Implementation for getting user's recent sessions
    try{
        // get sessions where user is host or participant
        const userId = req.user._id;
        const sessions = await Session.find({
            status:'completed',
            $or:[{host:userId},{participants:userId}]})
            .sort({createdAt:-1})
            .limit(20)

            res.status(200).json({sessions});
        
    }catch(error){
        console.error('Error fetching user recent sessions:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
export async function getSessionById(req, res) {
    // Implementation for getting a session by ID
    try{
        const {id} = req.params;
        const session = await Session.findById(id)
        .populate('host','name profileImage email clerkId')
        .populate('participants','name profileImage email clerkId');

        if(!session){
            return res.status(404).json({error: 'Session not found'});
        }

        return res.status(200).json({session});
    }catch(error){
        console.error('Error fetching session by ID:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
export async function joinSession(req, res) {
    // Implementation for joining a session
    try{
        const {id} = req.params;
        const userId = req.user._id;
        const clerkId = req.user.clerkId;
        const session = await Session.findById(id);

        if(!session){
            return res.status(404).json({error: 'Session not found'});
        }

        if(session.status !== 'active'){
            return  res.status(400).json({error: 'Cannot join a completed session'});
        }

        if(session.host.toString() === userId.toString()){  
            return res.status(400).json({error: 'Host cannot join their own session as participant'});
        }

        // check if session is already full
        if(session.participants){
            return res.status(409).json({error: 'Session is already full'});
        }

        session.participants = userId;
        await session.save();

        const channel = chatClient.channel('messaging', session.callId);
        await channel.addMembers([clerkId]); 

        return res.status(200).json({session});
    }catch(error){
        console.error('Error joining session:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
export async function endSession(req, res) {
    // Implementation for ending a session
    try{
        const {id} = req.params;
        const userId = req.user._id;
        const session = await Session.findById(id);

        if(!session){
            return res.status(404).json({error: 'Session not found'});
        }

        // only host can end the session
        if(session.host.toString() !== userId.toString()){
            return res.status(403).json({error: 'Only the host can end the session'});
        }
        // check if session is already completed
        if(session.status === 'completed'){
            return res.status(400).json({error: 'Session is already completed'});
        }

       
        //delete the Stream video call
        const call = streamClient.video.call('default', session.callId)
        await call.delete({hard:true});

        // delete the chat channel
        const channel = chatClient.channel('messaging', session.callId);
        await channel.delete();

        session.status = 'completed';
        await session.save();


        return res.status(200).json({session, message: 'Session ended successfully'});
    }catch(error){  
        console.error('Error ending session:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}
