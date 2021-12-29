//
// Copyright 2020 DXOS.org
//

/**
 * Returns a class to render the text color for the passed in variant.
 * If you pass an optional opacity it suffix's the class with it.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {number} opacity Optional opacity to append on the class
 * @returns {string} A class name, such as `text-white-80`
 */
export const getTextColorClassForVariant = (variant = "dark", opacity) => {
  let textColor = "text-black";

  if (variant === "light") {
    textColor = "text-white";
  }

  if (opacity) {
    textColor = `${textColor}-${opacity}`;
  }

  return textColor;
};

export const IN_VIEW_CONFIG = {
  rootMargin: "-100px 0px",
  triggerOnce: true
};

export const IN_VIEW_FADE_TRANSITION_DESKTOP = "all 0.7s ease-out";
export const IN_VIEW_FADE_TRANSITION_MOBILE = "all 0.3s ease-out";

export const IN_VIEW_FADE_STYLES_START = {
  opacity: 0,
  transform: "translateY(50%)",
  transition: IN_VIEW_FADE_TRANSITION_DESKTOP
};

export const IN_VIEW_FADE_STYLES_END = {
  opacity: 1,
  transform: "translateY(0%)"
};

export const getInitialFadeInStyles = isMobile => {
  const initialStyles = { ...IN_VIEW_FADE_STYLES_START };
  if (isMobile) {
    initialStyles.transition = IN_VIEW_FADE_TRANSITION_MOBILE;
  }
  return initialStyles;
};
