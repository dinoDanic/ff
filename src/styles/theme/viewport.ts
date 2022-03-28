export const size = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1210px",
};

export const sizeNumber = {
  mobile: 768,
  tablet: 1024,
  desktop: 1110,
};

export const device = {
  mobile: `@media(max-width: ${size.mobile})`,
  tablet: `@media(max-width: ${size.tablet})`,
  desktop: `@media (min-width: ${size.tablet})`,
};
