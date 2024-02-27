const defaultFormat = "VND";
const currencySymbol = "₫";
export const onConvertNumberToCurrency = (amount: number): string => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: defaultFormat,
  });

  return formatter.format(amount);
};
export const onConvertCurrencyToNumber = (value: string): number => {
  const numberValue = value.replace(currencySymbol, "").replace(/,/g, "");

  return parseFloat(numberValue);
};
