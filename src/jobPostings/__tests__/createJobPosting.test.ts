import JobPosting from '../../types/JobPosting';
import createJobPosting from '../createJobPosting';
import jobPostings from '../jobPostings';

describe('createJobPosting', () => {
  const validParams: JobPosting = {
    id: 1234,
    company: 'Gurren-dan',
    title: 'Leader',
    salary: {
      units: 'USD',
      amount: 12345,
    },
  };
  it('adds an entry to the job postings array', () => {
    createJobPosting(validParams);
    expect(jobPostings).toContain(validParams);
  });
});
