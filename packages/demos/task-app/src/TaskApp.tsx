//
// Copyright 2021 DXOS.org
//

import 'setimmediate';
import React from 'react';

import { TestFrameContainer } from '@dxos/frame-dev-server';
import { ClientProvider } from '@dxos/react-client';
import { manifest } from '@dxos/tasks-frame';

export const TaskApp = () => {
  console.log('ClientProvider', ClientProvider);
  console.log('TestFrameContainer', TestFrameContainer);
  return (
    <ClientProvider>
      <TestFrameContainer manifest={manifest} />
    </ClientProvider>
  );
};

// export const TaskApp = ({ provider, frameContainer, frame }: { provider: any, frameContainer: any, frame: any }) => {
//   const Provider = provider;
//   const FrameContainer = frameContainer;
//   return (
//     <Provider>
//       <FrameContainer manifest={frame.manifest} />
//     </Provider>
//   )
// }