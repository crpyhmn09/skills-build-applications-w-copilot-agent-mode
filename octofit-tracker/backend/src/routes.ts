import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from './models/index.js';

const router = Router();

function registerResourceRoutes(path: string, model: typeof User) {
  router.get(path, async (_request, response) => {
    try {
      const records = await model.find().sort({ createdAt: -1 }).lean();
      response.json(records);
    } catch (error) {
      response.status(500).json({ error: 'Unable to load records', details: error });
    }
  });

  router.post(path, async (request, response) => {
    try {
      const record = await model.create(request.body);
      response.status(201).json(record);
    } catch (error) {
      response.status(400).json({ error: 'Unable to create record', details: error });
    }
  });
}

registerResourceRoutes('/users', User);
registerResourceRoutes('/teams', Team);
registerResourceRoutes('/activities', Activity);
registerResourceRoutes('/leaderboard', Leaderboard);
registerResourceRoutes('/workouts', Workout);

export default router;
