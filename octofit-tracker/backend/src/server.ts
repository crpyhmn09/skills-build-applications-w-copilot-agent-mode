import cors from 'cors';
import express from 'express';
import { connectDatabase } from './config/database.js';
import apiRouter from './routes.js';

const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(cors());
app.use(express.json());
app.get('/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});
app.use('/api', apiRouter);

async function startServer() {
  try {
    await connectDatabase();
    app.listen(port, () => {
      console.log(`OctoFit API listening on ${apiBaseUrl}`);
    });
  } catch (error) {
    console.error('Unable to start OctoFit API:', error);
    process.exit(1);
  }
}

startServer();
