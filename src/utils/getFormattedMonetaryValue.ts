const getFormattedMonetaryValue = (value: number): string => {
  return (Math.round(value * 100) / 100)
    .toFixed(2)
    .toString()
    .replace(".", ",");
};

export default getFormattedMonetaryValue;
