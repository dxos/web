//
// Copyright 2021 DXOS.org
//
import 'setimmediate';
import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

const Main = ({ provider, frameContainer, frame }: any) => {
  const Provider = provider;
  const FrameContainer = frameContainer;
  return (
    <Provider>
      <FrameContainer manifest={frame.manifest} />
    </Provider>
  )
}

export const NoSRRTaskApp = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        // Load DXOS stack client-only.
        const ClientProvider = require('@dxos/react-client').ClientProvider;
        const TestFrameContainer = require('@dxos/frame-dev-server').TestFrameContainer;
        const Frame = require('@dxos/tasks-frame');
        return <Main provider={ClientProvider} frameContainer={TestFrameContainer} frame={Frame} />;
      }}
    </BrowserOnly>
  );
};