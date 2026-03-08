const TAX_BRACKETS = [
  { upperLimit: 300000, rate: 0.05 },
  { upperLimit: 700000, rate: 0.1 },
  { upperLimit: 1000000, rate: 0.15 },
  { upperLimit: Number.POSITIVE_INFINITY, rate: 0.2 }
];

export default function calculateTax(salary) {
  if (!Number.isFinite(salary) || salary < 0) {
    throw new Error('Salary must be a non-negative number.');
  }

  let previousLimit = 0;
  let totalTax = 0;

  for (const { upperLimit, rate } of TAX_BRACKETS) {
    if (salary <= previousLimit) {
      break;
    }

    const taxableAmount = Math.min(salary, upperLimit) - previousLimit;
    totalTax += taxableAmount * rate;
    previousLimit = upperLimit;
  }

  return Number(totalTax.toFixed(2));
}
