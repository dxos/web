//
// Copyright 2020 DXOS.org
//

import React from 'react';

/**
 * Renders page text.
 * @param {React.Component} children The components to render inside this title. Typically a plain string.
 * @param {string} variant `light` or `dark`. Default is `dark`. Use this to adjust the appearance based on the brightness of the background.
 * @param {Object} props expands `...props` onto the wrapper div
 * @returns {React.Component} `React.Component`
 */
export const HorizontalRule = ({ variant = 'dark', className = '', ...props }) => {
  return (
    <hr className={`dxos-horizontal-rule variant-${variant} ${className}`} {...props} />
  );
};
