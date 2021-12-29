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
export const VeryLargeTitleWithLine = withBreakpoints(
  ({
    children,
    variant = "dark",
    as = "h1",
    left,
    right,
    center,
    enableAnimation = false,
    breakpoints,
    ...props
  }) => {
    let alignment = "left"; // default to left
    if (right) alignment = "right";
    if (center) alignment = "center";
    if (left) alignment = "left";
    const RootElement = as;
    const textColorClass = getTextColorClassForVariant(variant, 90);
    let baseClasses = `
    dxos-f3
    dxos-fw-normal
    dxos-serif
    dxos-tracked-tight
    text-uppercase
    dxos-header
    dxos-header-with-line
    dxos-header-with-line-${alignment}
    ${textColorClass}
    variant-${variant}
  `;

    if (enableAnimation) {
      const { ref, inView } = useInView(IN_VIEW_CONFIG);
      let titleStylesOverrides = {
        ...getInitialFadeInStyles(breakpoints.sm),
        display: "inline-block"
      };
      baseClasses += "dxos-header-with-line--animate-ready";
      if (inView) {
        baseClasses += " dxos-header-with-line--animate-in";
        titleStylesOverrides = {
          ...titleStylesOverrides,
          ...IN_VIEW_FADE_STYLES_END
        };
      }
      return (
        <RootElement ref={ref} className={baseClasses} {...props}>
          <span style={titleStylesOverrides}>{children}</span>
        </RootElement>
      );
    }
    return (
      <RootElement className={baseClasses} {...props}>
        {children}
      </RootElement>
    );
  }
);
