function calculateDiscountedPrice(
  originalPrice: number | string,
  discount: number | string
) {
  // Type checking
  if (typeof originalPrice !== "number") {
    originalPrice = Number(originalPrice);
  }
  if (typeof discount !== "number") {
    discount = Number(discount);
  }
  const discountedPrice: number = originalPrice * discount;
  const amountToPay: number = originalPrice - discountedPrice;

  return {
    discountedPrice,
    amountToPay,
  };
}

export { calculateDiscountedPrice };
