//
// Copyright 2021 DXOS.org
//

import React from 'react';

import { ClientProvider } from '@dxos/react-client';
import { TestFrameContainer } from '@dxos/frame-dev-server';
import { manifest } from "@dxos/tasks-frame";

export const Main = () => {
  return (
    <ClientProvider>
      <TestFrameContainer manifest={manifest} />
    </ClientProvider>
  )
};
