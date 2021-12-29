//
// Copyright 2020 DXOS.org
//

import React from "react";
import { getTextColorClassForVariant } from "./helpers";

/**
 * Renders page text.
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const Text = ({ children, variant = "dark", ...props }) => {
  if (!children) {
    return null;
  }
  const textColorClass = getTextColorClassForVariant(variant, 80);
  return (
    <div
      className={`dxos-body-text dxos-lh-very-loose dxos-fw-normal dxos-tracked-minimal dxos-text-wrap-break-word dxos-f1 ${textColorClass} variant-${variant}`}
      dangerouslySetInnerHTML={{ __html: children }}
      {...props}
    />
  );
};
