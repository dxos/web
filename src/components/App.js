import 'setimmediate';

import React, { useEffect } from 'react';
import { useClient, useProfile, ClientProvider } from '@dxos/react-client';
import { JsonTreeView } from '@dxos/react-components';

const Main = () => {
  const client = useClient();
  const profile = useProfile();
  useEffect(() => {
    // TODO(zarco): Using it standalone wasn't working.
    window.setImmediate(async () => {
      if (!profile) {
        await client.halo.createProfile();
      }
    });
  }, [profile]);
  
  // TODO(zarco): Add Task-App here!
  return (
    <JsonTreeView data={{...profile}} />
  )
}

export const App = () => {
  return (
    <ClientProvider>
      <Main />
    </ClientProvider>
  );
};
