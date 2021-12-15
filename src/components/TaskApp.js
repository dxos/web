//
// Copyright 2021 DXOS.org
//
import 'setimmediate';
import React from 'react';

import { TestFrameContainer } from '@dxos/frame-dev-server';
import { ClientProvider } from '@dxos/react-client';

import { manifest } from '@dxos/tasks-frame';

export const TaskApp = () => {
  return (
    <ClientProvider>
      <TestFrameContainer manifest={manifest} />
    </ClientProvider>
  );
};
