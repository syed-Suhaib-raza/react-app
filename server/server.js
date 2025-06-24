import {config} from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/users.js';
import cors from 'cors';
config({path:'../.env'});
console.log(process.env.API_URL)
const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use('/users',userRoute);
app.get('/', (req, res) =>{
    res.send('On the Hompepage');
});
app.listen(port, ()=>{
    console.log(`Server running on port ${port} ...`);
})