import express from 'express';
import { connectDB } from './config/db';
import dotenv from 'dotenv/config';

// dotenv.config();
connectDB();
const port = process.env.PORT ?? 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});