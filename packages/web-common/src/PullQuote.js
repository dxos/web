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
 * Renders a pullquote.
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const PullQuote = withBreakpoints(
  ({
    children,
    variant = "dark",
    className = "",
    enableAnimation = false,
    breakpoints,
    ...props
  }) => {
    const textColorClass = getTextColorClassForVariant(variant, 90);
    if (enableAnimation) {
      const { ref, inView } = useInView(IN_VIEW_CONFIG);
      let quoteStyles = {
        ...getInitialFadeInStyles(breakpoints.sm)
      };
      if (inView) {
        quoteStyles = {
          ...quoteStyles,
          ...IN_VIEW_FADE_STYLES_END
        };
      }
      return (
        <blockquote
          ref={ref}
          style={quoteStyles}
          className={`dxos-block-quote dxos-f2 dxos-fw-500 mb-0 dxos-serif dxos-lh-very-loose ${textColorClass} variant-${variant} ${className}`}
          {...props}
        >
          {children}
        </blockquote>
      );
    }
    return (
      <blockquote
        className={`dxos-block-quote dxos-f2 dxos-fw-500 mb-0 dxos-serif dxos-lh-very-loose ${textColorClass} variant-${variant} ${className}`}
        {...props}
      >
        {children}
      </blockquote>
    );
  }
);
