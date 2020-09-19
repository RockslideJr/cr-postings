import { number, object, ObjectSchema, string } from 'yup';

import Currency, { unitOptions } from '../../types/Currency';
import JobPosting from '../../types/JobPosting';

const currencySchema: ObjectSchema<Currency> = object({
  units: string().required().oneOf(unitOptions),
  amount: number().required(),
})
  .required()
  .defined();

const paramSchema: ObjectSchema<JobPosting> = object({
  id: number().required(),
  company: string().required(),
  title: string().required(),
  salary: currencySchema,
}).defined();

const validateParams = async (params: any): Promise<JobPosting | null> => {
  try {
    return await paramSchema.validate(params, {
      stripUnknown: true,
    });
  } catch {
    return await null;
  }
};

export default validateParams;
