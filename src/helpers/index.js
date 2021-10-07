export function helpersTransactions(transactions) {
  /**
   * Returns all values into array
   */
  const values = transactions.map((transaction) => transaction.amount);

  /**
   * Returns balance value remainder
   */
  const total = values
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);

  /**
   * Returns value entered
   */
  const income = values
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  /**
   * Returns value that was spent
   */
  const expense = (
    values.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return {
    income,
    expense,
    total,
    values,
  };
}
