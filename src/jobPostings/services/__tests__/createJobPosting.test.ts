import JobPosting from '../../../types/JobPosting';
import jobPostings from '../../jobPostings';
import createJobPosting from '../createJobPosting';

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
