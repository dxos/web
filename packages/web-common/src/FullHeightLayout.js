//
// Copyright 2020 DXOS.org
//

import React from 'react';

export const FullHeightLayout = ({ header, footer, children, className }) => {
  return (
    <div className={ className } style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      { header }
      <div style={{ flex: 1 }}>
        {children}
      </div>
      { footer }
    </div>
  );
};
