import Currency from './Currency';

interface JobPosting {
  id: number;
  company: string;
  title: string;
  salary: Currency;
}

export default JobPosting;
