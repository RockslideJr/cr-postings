import JobPosting from '../../types/JobPosting';
import getJobPosting from '../getJobPosting';
import jobPostings from '../jobPostings';

beforeEach(() => {
  jobPostings.splice(0, jobPostings.length);
});
describe('getJobPosting', () => {
  describe('when the posting is found', () => {
    it('returns the posting', () => {
      const posting: JobPosting = {
        id: 4,
        company: 'Avengers',
        title: 'Leader',
        salary: {
          units: 'USD',
          amount: 250000,
        },
      };
      jobPostings.push(posting);

      expect(getJobPosting(posting.id)).toEqual(posting);
    });
  });

  describe('when the posting is not found', () => {
    it('returns null', () => {
      expect(getJobPosting(4)).toEqual(null);
    });
  });
});
