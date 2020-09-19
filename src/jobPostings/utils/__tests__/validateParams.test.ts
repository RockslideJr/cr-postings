import validateParams from '../validateParams';

describe('validateParams', () => {
  describe('params is not an object', () => {
    it('returns null', async () => {
      expect(await validateParams('invalid param type')).toBeNull;
    });
  });
  describe('required posting params are not present', () => {
    it('returns null', async () => {
      const invalidParams = {
        hello: 'world',
      };
      expect(await validateParams(invalidParams)).toBeNull();
    });
  });
  describe('required posting params are present', () => {
    it('returns valid params', async () => {
      const validParams = {
        id: 1234,
        company: 'Justice League',
        title: 'Co-Chair',
        salary: {
          units: 'USD',
          amount: 584362,
        },
      };
      expect(await validateParams(validParams)).toEqual(validParams);
    });

    describe('additional params are also present', () => {
      it('returns only the valid params', async () => {
        const validParamsWithExtras = {
          id: 1234,
          company: 'Justice League',
          hello: 'world',
          title: 'Co-Chair',
          salary: {
            units: 'USD',
            amount: 584362,
          },
        };
        expect(await validateParams(validParamsWithExtras)).toEqual({
          id: 1234,
          company: 'Justice League',
          title: 'Co-Chair',
          salary: {
            units: 'USD',
            amount: 584362,
          },
        });
      });
    });
  });
});
