import express from 'express';
import path from 'path';
import cors from 'cors';
import { serve } from 'inngest/express';
import {clerkMiddleware} from '@clerk/express';
import {ENV} from './lib/env.js';
import { connectDB } from './lib/db.js';
import { inngest,functions } from './lib/inngest.js'; 
import chatRoutes from './routes/chatRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';

const app = express();

const __dirname = path.resolve();

app.use(express.json());
// Credentials:true is needed to accept cookies from the frontend
app.use(cors({origin:true,credentials:true}));

app.use(clerkMiddleware());// this adds Clerk authentication to the express app

app.use("/api/inngest",serve({client:inngest,functions}))
app.use('/api/chat',chatRoutes);
app.use('/api/session',sessionRoutes);


app.get('/health', (req, res) => {
  res.send('Health api is working fine');
});


if(ENV.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../frontend/dist'))); 
  
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend","dist", "index.html"));
  });
}


const startServer = async () => {
  try {
    await connectDB();
  app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}
startServer();