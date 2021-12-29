//
// Copyright 2020 DXOS.org
//

import React from 'react';
import { getTextColorClassForVariant } from './helpers';

/**
 * Renders a Very Small Title
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const VerySmallTitle = ({ children, variant = 'dark', className = '', ...props }) => {
  const textColorClass = getTextColorClassForVariant(variant, 80);
  return (
    <h4 className={`dxos-f1 dxos-serif dxos-fw-600 mb-3 dxos-header dxos-lh-normal ${textColorClass} variant-${variant} ${className}`} {...props}>
      { children }
    </h4>
  );
};
