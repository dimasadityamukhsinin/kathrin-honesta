export const mediaWidth = {
    smaller: 576,
    mobile: 768,
    tablet: 1024,
  };
  
  export const windowMatchMedia = {
    smaller: () =>
      window.matchMedia(`(max-width: ${mediaWidth.smaller}px)`).matches,
    mobile: () =>
      window.matchMedia(`(max-width: ${mediaWidth.mobile}px)`).matches,
    tablet: () =>
      window.matchMedia(`(max-width: ${mediaWidth.tablet}px)`).matches,
  };
  