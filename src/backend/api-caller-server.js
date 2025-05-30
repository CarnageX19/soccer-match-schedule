import conf from '../global-configs/backend-confs.js';
import express from 'express';
import cors from 'cors';

const app = express();
const frontendUrl = conf.frontendUrl;

app.use(cors({
    origin:frontendUrl
}));

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin !== frontendUrl) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
});

app.get('/', async (req, res) => {
    const today = new Date().toISOString().split('T')[0];
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const url = `https://api.football-data.org/v4/matches?status=SCHEDULED&dateFrom=${today}&dateTo=${nextWeek}`;

    try {
        const response = await fetch(url, {
        headers: {
            'X-Auth-Token': conf.footballApiKey
        }
        });
        const result = await response.json();
        res.send(result.matches);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Failed to fetch upcoming matches' });
  }
});

app.listen(3000, () => {
  console.log('Api Caller Server running on http://localhost:3000');
});
