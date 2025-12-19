import { chatClient } from '../lib/stream.js'; 

export async function getStreamToken(req, res) {
    try{
        // use clerkId for stream (not monogodb _id)=> it should match the id  we have in the stream dashboard 
        const token = chatClient.createToken(req.user.clerkId);
        return res.status(200).json({
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image
        });
    }catch(error){
        console.error('Error getting Stream token:', error);
        return res.status(500).json({error: 'Internal server error'});
    }
}