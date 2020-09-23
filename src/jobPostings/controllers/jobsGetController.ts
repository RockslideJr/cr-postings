import { RequestHandler } from 'express';

import getAllJobPostings from '../services/getAllJobPostings';

const jobsGetController: RequestHandler = (_req, res) => {
  const postings = getAllJobPostings();
  res.send(postings);
};

export default jobsGetController;
