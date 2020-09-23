import { RequestHandler } from 'express';

import createJobPosting from '../services/createJobPosting';
import validateParams from '../utils/validateParams';

const jobPostController: RequestHandler = async (req, res) => {
  const params = await validateParams(req.body);
  if (params) {
    createJobPosting(params);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
};

export default jobPostController;
