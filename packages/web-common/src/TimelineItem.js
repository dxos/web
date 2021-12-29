//
// Copyright 2020 DXOS.org
//

import React from 'react';

/**
 * Renders a card with a title and body
 * @param {string} heading
 * @param {string} body
 * @param {string} dotColor The CSS color of the dot. Default `black`
 * @param {string} backgroundColor The CSS color of the background. Default `#F2F2F2`
 * @param {string} variant Defaults to `light`
 * @returns {React.Component} `React.Component`
 */
export const TimelineItem = ({ children, dotColor = 'black', backgroundColor = '#F2F2F2' }) => (
  <li className="dxos-timeline-item">
    <div className="dxos-timeline-item-tail" />
    <div className="dxos-timeline-item-head" style={{
      color: dotColor,
      borderColor: dotColor,
      backgroundColor: dotColor
    }} />
    <div className="dxos-timeline-item-content px-4 pt-4 pb-2 rounded" style={{
      backgroundColor: backgroundColor
    }}>
      {children}
    </div>
  </li>
);
