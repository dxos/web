//
// Copyright 2020 DXOS.org
//

import React from 'react';
import { getTextColorClassForVariant } from './helpers';

/**
 * Renders a Title with a horizontal line beside it.
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {bool} left `true` for a left-aligned title (default)
 * @param {bool} right `true` for a right-aligned title
 * @param {bool} center `true` for a center-aligned title
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const TitleWithLine = ({ children, variant = 'dark', left, right, center, ...props }) => {
  let alignment = 'left'; // default to left
  if (right) alignment = 'right';
  if (center) alignment = 'center';
  if (left) alignment = 'left';

  const textColorClass = getTextColorClassForVariant(variant, 80);
  const baseClasses = `
    dxos-f2
    mb-0
    dxos-tracked
    dxos-header
    text-uppercase
    dxos-header-with-line
    dxos-header-with-line-${alignment}
    ${textColorClass}
    variant-${variant}
  `;

  return (
    <h3 className={baseClasses} {...props}>
      { children }
    </h3>
  );
};
