//
// Copyright 2020 DXOS.org
//

import React from 'react';

/**
 * Renders a section with a defined background color.
 * @param id
 * @param {string} colorClass The selector of the color for the background. i.e: `bg-black`.
 * @param {React.Component} children The components to render inside this section.
 * @returns {React.Component} `React.Component`
 */
export const FullColorSection = ({ id, colorClass = 'bg-white', children }) => (
  <section className={`py-4 py-lg-5 ${colorClass}`} id={id}>
    <div className="py-lg-3">
      {children}
    </div>
  </section>
);
