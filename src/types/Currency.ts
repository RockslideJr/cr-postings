interface Currency {
  units: typeof unitOptions[number];
  amount: number;
}

export const unitOptions = ['USD'] as const;

export default Currency;
