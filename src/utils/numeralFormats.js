import numeral from "numeral";

export const priceFormatter = price => {
  const formatPrice = price => numeral(price.toString()).format("$0,0.00");
  return price ? formatPrice(price) : formatPrice(0);
};
