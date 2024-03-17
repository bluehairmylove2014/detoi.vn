/**
 * Format a number into a currency string based on the specified format type.
 * @param {number} amount - The amount to format.
 * @param {'vnd' | 'usd'} format - The format type ('vnd' for Vietnamese đồng, 'usd' for US dollars).
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (
  amount: number,
  format: 'vnd' | 'usd'
): string => {
  const numberFormatConfig =
    format === 'vnd'
      ? { locales: 'vi-VN', currency: 'VND' }
      : { locales: 'en-US', currency: 'USD' };

  const formatter = new Intl.NumberFormat(numberFormatConfig.locales, {
    style: 'currency',
    currency: numberFormatConfig.currency,
  });
  if (format === 'vnd') {
    return formatter.format(amount);
  }

  return formatter.format(amount);
};
