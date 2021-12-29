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
 * Renders a Very Large title.
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const VeryLargeTitle = withBreakpoints(
  ({
    children,
    variant = "dark",
    enableAnimation = false,
    breakpoints,
    ...props
  }) => {
    const textColorClass = getTextColorClassForVariant(variant, 90);
    const { ref, inView } = useInView(IN_VIEW_CONFIG);
    let titleStyles;
    if (enableAnimation) {
      titleStyles = {
        ...getInitialFadeInStyles(breakpoints.sm)
      };
      if (inView) {
        titleStyles = {
          ...titleStyles,
          ...IN_VIEW_FADE_STYLES_END
        };
      }
    }
    return (
      <h1
        ref={ref}
        className={`dxos-f3 dxos-fw-normal dxos-serif dxos-tracked-tight text-uppercase dxos-header ${textColorClass} variant-${variant}`}
        style={titleStyles}
        {...props}
      >
        {children}
      </h1>
    );
  }
);
