//
// Copyright 2020 DXOS.org
//

import React from 'react';
import { getTextColorClassForVariant } from './helpers';

/**
 * Renders a Large title.
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const LargeTitle = ({ children, variant = 'dark', ...props }) => {
  const textColorClass = getTextColorClassForVariant(variant, 90);
  return (
    <h1 className={`h2 dxos-header ${textColorClass} variant-${variant}`} {...props}>
      { children }
    </h1>
  );
};
