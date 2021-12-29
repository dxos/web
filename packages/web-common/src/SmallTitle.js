//
// Copyright 2020 DXOS.org
//

import React from "react";
import {
  getTextColorClassForVariant,
  getInitialFadeInStyles,
  IN_VIEW_CONFIG,
  IN_VIEW_FADE_STYLES_END
} from "./helpers";
import { useInView } from "react-intersection-observer";
import { withBreakpoints } from "gatsby-plugin-breakpoints";

/**
 * Renders a Small Title
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {string} className
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const SmallTitle = withBreakpoints(
  ({
    children,
    as = "h4",
    variant = "dark",
    className,
    enableAnimation = false,
    breakpoints,
    ...props
  }) => {
    const textColorClass = getTextColorClassForVariant(variant, 80);
    const { ref, inView } = useInView(IN_VIEW_CONFIG);
    let smallTitleStyles;

    if (enableAnimation) {
      smallTitleStyles = {
        ...getInitialFadeInStyles(breakpoints.sm)
      };
      if (inView) {
        smallTitleStyles = {
          ...smallTitleStyles,
          ...IN_VIEW_FADE_STYLES_END
        };
      }
    }
    const RootElement = as;
    return (
      <RootElement
        ref={ref}
        className={`dxos-f2 mb-3 dxos-header dxos-lh-normal ${textColorClass} variant-${variant} ${className}`}
        style={smallTitleStyles}
        {...props}
      >
        {children}
      </RootElement>
    );
  }
);
