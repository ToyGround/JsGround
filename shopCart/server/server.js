import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import data from './data.json';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors({origin: true, credential: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`[server start...port:${PORT}] `);
});