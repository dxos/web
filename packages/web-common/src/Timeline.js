//
// Copyright 2020 DXOS.org
//

import React from 'react';

/**
 * Wrapper for timeline items
 * @param {React.Component} children
 * @returns {React.Component} `React.Component`
 */
export const Timeline = ({ children }) => (
  <ul className="dxos-timeline">
    { children }
  </ul>
);
