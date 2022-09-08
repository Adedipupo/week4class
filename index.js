import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import orgRoute from './routes/organizationRoute.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json())

const port = 8080;

app.get('/api', (req, res) => {
    res.send("Api is live!")
});
app.use('/org',orgRoute)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});