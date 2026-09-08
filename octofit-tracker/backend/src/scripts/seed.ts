import mongoose from 'mongoose';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.create([
      { username: 'maya-chen', email: 'maya.chen@example.com', displayName: 'Maya Chen', fitnessLevel: 'intermediate' },
      { username: 'noah-williams', email: 'noah.williams@example.com', displayName: 'Noah Williams', fitnessLevel: 'beginner' },
      { username: 'sofia-rodriguez', email: 'sofia.rodriguez@example.com', displayName: 'Sofia Rodriguez', fitnessLevel: 'advanced' },
    ]);

    const teams = await Team.create([
      { name: 'Summit Squad', members: [users[0]._id, users[2]._id], points: 310 },
      { name: 'Trail Blazers', members: [users[1]._id], points: 120 },
    ]);

    await Activity.create([
      { user: users[0]._id, type: 'running', durationMinutes: 35, distanceKm: 5.2, points: 80, completedAt: new Date('2026-09-01') },
      { user: users[1]._id, type: 'walking', durationMinutes: 45, distanceKm: 3.4, points: 55, completedAt: new Date('2026-09-02') },
      { user: users[2]._id, type: 'strength', durationMinutes: 40, points: 95, completedAt: new Date('2026-09-03') },
    ]);

    await Leaderboard.create([
      { user: users[2]._id, team: teams[0]._id, points: 190, rank: 1 },
      { user: users[0]._id, team: teams[0]._id, points: 120, rank: 2 },
      { user: users[1]._id, team: teams[1]._id, points: 120, rank: 3 },
    ]);

    await Workout.create([
      { name: 'Steady State Run', type: 'cardio', durationMinutes: 30, difficulty: 'beginner', description: 'A comfortable run to build aerobic endurance.' },
      { name: 'Full Body Circuit', type: 'strength', durationMinutes: 25, difficulty: 'intermediate', description: 'A balanced circuit using bodyweight movements.' },
      { name: 'Mobility Reset', type: 'mobility', durationMinutes: 15, difficulty: 'beginner', description: 'Gentle mobility work for recovery and flexibility.' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
