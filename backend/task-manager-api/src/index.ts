import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

const mongoUri = 'mongodb://localhost:27017';
mongoose.connect(mongoUri, {
   dbName: 'task-manager',
}).then(() => {
    console.log('Database Connected');
}).catch((error) =>console.log('Error connecting to database', error)); 

app.use('/', router)

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});