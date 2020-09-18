import express from 'express';

import jobPostings from './jobPostings/routes';

const router = express.Router();

router.use('/jobs', jobPostings);

export default router;
