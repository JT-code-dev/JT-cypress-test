import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON file manually
const questionData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'pythonQuestions.json'), 'utf-8')
);

try {
  await db();
  await cleanDB();

  // Insert questions into the database
  await Question.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
