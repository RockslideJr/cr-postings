import { RequestHandler } from 'express';

import getJobPosting from '../services/getJobPosting';

const jobGetController: RequestHandler = ({ params: { id } }, res) => {
  const idAsInt = parseInt(id);
  if (isNaN(idAsInt)) {
    res.sendStatus(400);
  } else {
    const posting = getJobPosting(idAsInt);
    if (posting) res.send(posting);
    else res.sendStatus(404);
  }
};

export default jobGetController;
