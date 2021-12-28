import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// DXOS App using noSSR.
const Sanity = () => {
  return (
    <div>
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          // Load DXOS stack client-only.
          const App = require('@dxos/sanity').SanityApp;
          return <App />;
        }}
      </BrowserOnly>
    </div>
  );
}

export default Sanity;