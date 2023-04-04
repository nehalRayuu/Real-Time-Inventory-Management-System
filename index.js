import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './routes/routes.js';


dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',router)


const server = http.createServer(app);
const port = process.env.PORT || 3000;







const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log(socket.id)
})


mongoose.connect(process.env.URL, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));
  
  
  
  server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });

  export default io