import JobPosting from '../../../types/JobPosting';
import jobPostings from '../../jobPostings';
import getAllJobPostings from '../getAllJobPostings';

beforeEach(() => {
  jobPostings.splice(0, jobPostings.length);
});

describe('getAllJobPostings', () => {
  it('returns all existing job postings', () => {
    const postingOne: JobPosting = {
      id: 1,
      company: 'Hogwarts',
      title: 'Grounds Keeper',
      salary: {
        units: 'USD',
        amount: 45000,
      },
    };
    const postingTwo: JobPosting = {
      id: 2,
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
