import express from 'express';

import jobGetController from './controllers/jobGetController';
import jobPostController from './controllers/jobPostController';
import jobsGetController from './controllers/jobsGetController';

const router = express.Router();

router.get('/', jobsGetController);
router.get('/:id', jobGetController);
router.post('/', jobPostController);

export default router;
