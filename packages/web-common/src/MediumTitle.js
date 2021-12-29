//
// Copyright 2020 DXOS.org
//

import React from "react";
import { getTextColorClassForVariant } from "./helpers";

/**
 * Renders a Medium Title
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const MediumTitle = ({ children, variant = "dark", ...props }) => {
  const textColorClass = getTextColorClassForVariant(variant, 80);
  return (
    <h3
      className={`dxos-f3 dxos-header dxos-lh-normal dxos-tracked-tight ${textColorClass} mb-3 variant-${variant}`}
      {...props}
    >
      {children}
    </h3>
  );
};
