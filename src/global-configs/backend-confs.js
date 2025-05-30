import dotenv from 'dotenv';
dotenv.config();

const conf = {
  footballApiKey: process.env.FOOTBALL_DATA_API_KEY,
  frontendUrl: process.env.FRONTEND_URL?.trim().replace(/\/$/, '')
};

export default conf;