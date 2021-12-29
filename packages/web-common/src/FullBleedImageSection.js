//
// Copyright 2020 DXOS.org
//

import React from "react";
import BackgroundImage from "gatsby-background-image";
import Container from "react-bootstrap/Container";

/**
 * Renders a section with a background image set to cover.
 * @param {childImageSharp.fluid.GatsbyImageSharpFluid} fluidImage CSS color value.
 * @param {React.Component} children The components to render inside this section.
 * @param {number} height The viewport-height of the section. Options: `25`, `50`, `100`. Default `100`
 * @returns {React.Component} `React.Component`
 */
export const FullBleedImageSection = ({
  fluidImage,
  children,
  extraClasses,
  height = 100,
  minHeight
}) => {
  const heightClass = `dxos-height-${height}vh`;
  let styles = {};

  /*
   * Use height and minHeight to avoid making it to thin if the user has a
   * content that doesn't fit within the 100vh if a screen height is small
   */

  if (minHeight) {
    styles = {
      minHeight: minHeight,
      height: `${height}vh`
    };
  }

  return (
    <section>
      <BackgroundImage
        fluid={fluidImage}
        className={`${heightClass} ${extraClasses} dxos-vertical-center dxos-background-cover`}
        style={styles}
      >
        <Container>{children}</Container>
      </BackgroundImage>
    </section>
  );
};
