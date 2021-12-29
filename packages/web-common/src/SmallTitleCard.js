//
// Copyright 2020 DXOS.org
//

import React from "react";
import { useInView } from "react-intersection-observer";
import {
  getInitialFadeInStyles,
  IN_VIEW_CONFIG,
  IN_VIEW_FADE_STYLES_END
} from "./helpers";
import { SmallTitle } from "./SmallTitle";
import { Text } from "./Text";
import { withBreakpoints } from "gatsby-plugin-breakpoints";
/**
 * Renders a card with a title and body
 * @param {string} heading
 * @param {string} [avatar]
 * @param {string} body
 * @param {string} variant Defaults to `light`
 * @returns {React.Component} `React.Component`
 */
export const SmallTitleCard = withBreakpoints(
  ({
    heading,
    body,
    smallTitleHeadingType = "h4",
    variant = "dark",
    titleClassName,
    breakpoints,
    enableAnimation
  }) => {
    let cardStyles = {};
    let domRef;

    if (enableAnimation) {
      const { ref, inView } = useInView(IN_VIEW_CONFIG);

      domRef = ref;
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
      <div ref={domRef} style={cardStyles}>
        <SmallTitle
          as={smallTitleHeadingType}
          variant={variant}
          className={titleClassName}
        >
          {heading}
        </SmallTitle>

        {body && <Text variant={variant}>{body}</Text>}
      </div>
    );
  }
);
