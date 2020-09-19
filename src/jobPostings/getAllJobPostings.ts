import JobPosting from '../types/JobPosting';
import jobPostings from './jobPostings';

const getAllJobPostings = (): JobPosting[] => {
  return jobPostings;
};

export default getAllJobPostings;
