import 'dotenv/config';
import 'reflect-metadata';
import './database';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});

export default app;
