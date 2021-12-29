//
// Copyright 2020 DXOS.org
//

import React from "react";
import {
  getInitialFadeInStyles,
  IN_VIEW_CONFIG,
  IN_VIEW_FADE_STYLES_END
} from "./helpers";
import { MediumTitle } from "./MediumTitle";
import { Text } from "./Text";
import { useInView } from "react-intersection-observer";
import { withBreakpoints } from "gatsby-plugin-breakpoints";
/**
 * Renders a card with a title and body
 * @param {string} heading
 * @param {string} body
 * @param {string} variant Defaults to `light`
 * @returns {React.Component} `React.Component`
 */
//
// Copyright 2021 DXOS.org
//

export const MediumTitleCard = withBreakpoints(
  ({
    heading,
    body,
    variant = "dark",
    enableAnimation = false,
    breakpoints
  }) => {
    const { ref, inView } = useInView(IN_VIEW_CONFIG);
    let cardStyles;

    if (enableAnimation) {
      cardStyles = {
        ...getInitialFadeInStyles(breakpoints.sm)
      };
      if (inView) {
        cardStyles = {
          ...cardStyles,
          ...IN_VIEW_FADE_STYLES_END
        };
      }
    }

    return (
      <div ref={ref} style={cardStyles}>
        <MediumTitle variant={variant}>{heading}</MediumTitle>

        {body && <Text variant={variant}>{body}</Text>}
      </div>
    );
  }
);
