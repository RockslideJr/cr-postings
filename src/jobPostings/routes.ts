import express from 'express';

import getAllJobPostings from './getAllJobPostings';

const router = express.Router();

router.get('/', (_req, res) => {
  const postings = getAllJobPostings();
  res.send(postings);
});
router.get('/:id', (req, res) => {
  const posting = getJobPosting(req.params.id);
  res.send(posting);
});
router.post('/', (_req, res) => {
  const postCreated = createJobPosting();

  if (postCreated) {
    res.sendStatus(200);
  } else {
    res.sendStatus(504);
  }
});

export default router;
