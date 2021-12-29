//
// Copyright 2020 DXOS.org
//

import React from "react";
import {
  getInitialFadeInStyles,
  IN_VIEW_CONFIG,
  IN_VIEW_FADE_STYLES_END
} from "./helpers";
import { useInView } from "react-intersection-observer";
import { withBreakpoints } from "gatsby-plugin-breakpoints";
/**
 * Renders a Medium Asset
 * @param {React.Component} children The components to render inside this Asset. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const MediumAsset = withBreakpoints(
  ({ children, enableAnimation = false, breakpoints, ...props }) => {
    const { ref, inView } = useInView(IN_VIEW_CONFIG);
    let cardStyles;

    if (enableAnimation) {
      cardStyles = {
        ...getInitialFadeInStyles(breakpoints.sm),
        ...props.style
      };
      if (inView) {
        cardStyles = {
          ...cardStyles,
          ...IN_VIEW_FADE_STYLES_END
        };
      }
      props.style = { ...cardStyles, ...props.style };
    }

    return (
      <div ref={ref} style={props.style} {...props}>
        {children}
      </div>
    );
  }
);
