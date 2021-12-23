import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Simple, /* SimpleWithClient, */ SimpleWithState, MaterialSimple, MaterialWithState, DXOSReactComponents, SimpleWithRemoteClient } from '@dxos/sanity';

export const DemoApp = () => {
  return (
    <div>
      <h2>Components</h2>
      <Simple />
      <SimpleWithState />
      <MaterialSimple />
      <MaterialWithState />
      <DXOSReactComponents />
      {/* NoSSR Component, needs to be tested. */}
      {/* <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          // Load DXOS stack client-only.
          const ClientProvider = require('@dxos/react-client').ClientProvider;
          return <SimpleWithRemoteClient clientProvider={ClientProvider} />;
        }}
      </BrowserOnly> */}
      {/* This component crashes the page. */}
      {/* <SimpleWithClient /> */}
    </div>
  );
}
