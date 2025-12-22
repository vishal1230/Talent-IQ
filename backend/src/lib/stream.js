import {StreamChat} from 'stream-chat';
import {StreamClient} from '@stream-io/node-sdk';
import {ENV} from './env.js';


const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET; 

if(!apiKey || !apiSecret) {
  console.error('Stream API key and secret is missing');
}

export const streamClient = new StreamClient(apiKey, apiSecret); // this is for video call operations
export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // this is for chat operations

export const upsertStreamUser = async (userData) => {
    try{
        await chatClient.upsertUser(userData);
        console.log('Stream user upserted successfully.', userData);
    }catch(error){
        console.error('Error upserting Stream user:', error);
    }
}

export const deleteStreamUser = async (userId) => {
    try{
        await chatClient.delete(userId);
        console.log('Stream user deleted successfully.', userId);
    }catch(error){
        console.error('Error deleting the Stream user:', error);
    }
}