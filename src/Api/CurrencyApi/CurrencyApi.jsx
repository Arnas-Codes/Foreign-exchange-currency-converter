export const getData = async (baseCurrency) => {
  const response = await fetch(
    `https://api.frankfurter.dev/v2/rates?base=${baseCurrency}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
