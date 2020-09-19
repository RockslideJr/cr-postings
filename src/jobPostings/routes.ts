import express from 'express';

import createJobPosting from './createJobPosting';
import getAllJobPostings from './getAllJobPostings';
import getJobPosting from './getJobPosting';
import validateParams from './utils/validateParams';

const router = express.Router();

router.get('/', (_req, res) => {
  const postings = getAllJobPostings();
  res.send(postings);
});
router.get('/:id', ({ params: { id } }, res) => {
  const idAsInt = parseInt(id);
  if (isNaN(idAsInt)) {
    res.sendStatus(400);
  } else {
    const posting = getJobPosting(idAsInt);
    if (posting) res.send(posting);
    else res.sendStatus(404);
  }
});
router.post('/', async (req, res) => {
  const params = await validateParams(req.body);
  if (params) {
    createJobPosting(params);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

export default router;
