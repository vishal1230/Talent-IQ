import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try{
            const clerkId = req.auth().userId;
            if(!clerkId){
                return res.status(401).json({error: 'Unauthorized'});
            }
            // find user in by clerkId
            const user = await User.findOne({clerkId});
            if(!user){
                return res.status(401).json({msg: 'User not found'});
            }

            req.user = user; // attach user to request object
            next();
        }catch(error){
            console.error('Error in protectRoute middleware:', error);
            return res.status(500).json({error: 'Internal server error'});
        }
    }
]