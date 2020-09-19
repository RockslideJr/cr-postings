import JobPosting from '../../types/JobPosting';
import getAllJobPostings from '../getAllJobPostings';
import jobPostings from '../jobPostings';

beforeEach(() => {
  jobPostings.slice(0, 0);
});

describe('getAllJobPostings', () => {
  it('returns all existing job postings', () => {
    const postingOne: JobPosting = {
      company: 'Hogwarts',
      title: 'Grounds Keeper',
      salary: {
        units: 'USD',
        amount: 45000,
      },
    };
    const postingTwo: JobPosting = {
      company: 'Hogwarts',
      title: 'HeadMaster',
      salary: {
        units: 'USD',
        amount: 76000,
      },
    };
    jobPostings.push(postingOne);
    jobPostings.push(postingTwo);

    expect(getAllJobPostings()).toEqual(
      expect.arrayContaining([expect.objectContaining(postingOne), expect.objectContaining(postingTwo)]),
    );
  });
});
