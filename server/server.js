import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRoute from './routes/users.js';
import cors from 'cors';

// Load environment variables (adjust path if needed)
config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('On the Homepage');
});

app.listen(port, () => {
    console.log(`Server running on port ${port} ...`);
});
