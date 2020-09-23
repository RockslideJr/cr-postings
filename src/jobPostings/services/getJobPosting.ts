import JobPosting from '../../types/JobPosting';
import jobPostings from '../jobPostings';

const getJobPosting = (id: number): JobPosting | null => {
  const result = jobPostings.filter((posting) => posting.id === id);
  if (result.length == 0) return null;
  return result[0];
};

export default getJobPosting;
