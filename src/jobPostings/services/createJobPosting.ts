import Currency from '../../types/Currency';
import jobPostings from '../jobPostings';

const createJobPosting = (params: { id: number; company: string; title: string; salary: Currency }): boolean => {
  jobPostings.push(params);

  return true;
};

export default createJobPosting;
