import express from 'express';

import getAllJobPostings from './getAllJobPostings';
import getJobPosting from './getJobPosting';

const router = express.Router();

router.get('/', (_req, res) => {
  const postings = getAllJobPostings();
  res.send(postings);
});
router.get('/:id', ({ params: { id } }, res) => {
  const idAsInt = parseInt(id);
  if (isNaN(idAsInt)) {
    res.sendStatus(504);
  } else {
    const posting = getJobPosting(idAsInt);
    if (posting) res.send(posting);
    else res.sendStatus(404);
  }
});
router.post('/', (_req, res) => {
  // const postCreated = createJobPosting();
  // if (postCreated) {
  //   res.sendStatus(200);
  // } else {
  //   res.sendStatus(504);
  // }
});

export default router;
