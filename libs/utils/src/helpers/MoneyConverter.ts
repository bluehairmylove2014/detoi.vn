const defaultFormat = "VND";
const currencySymbol = "₫";
export const onConvertNumberToCurrency = (amount: number, isUnitVND?: boolean): string => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: defaultFormat,
  });
  if (isUnitVND) {
    return formatter.format(amount).replace('₫', defaultFormat);
  }

  return formatter.format(amount);
};
export const onConvertCurrencyToNumber = (value: string): number => {
  const numberValue = value.replace(currencySymbol, "").replace(/,/g, "");

  return parseFloat(numberValue);
};
