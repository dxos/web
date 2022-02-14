//
// Copyright 2021 DXOS.org
//

import React, { useEffect, useState } from 'react';

import { Item } from '@dxos/client';
import { TestFrameContainer } from '@dxos/frame-dev-server';
import { ClientProvider, useTestPartyBootstrap } from '@dxos/react-client';
import { DisplayMode } from '@dxos/react-framekit';
import { manifest } from '@dxos/tasks-frame';

export const Main = () => {
  const peers = useTestPartyBootstrap();
  const [item, setItem] = useState<Item<any>>();

  useEffect(() => {
    if (peers[0]?.party) {
      setImmediate(async () => {
        const item = await manifest.createRootItem?.(peers[0].party);
        setItem(item);
      });
    }
  }, [peers]);

  if (!item) {
    return null;
  }

  return (
    <>
      {peers.map(({ client, party }, index) => (
        <ClientProvider key={index} client={client}>
          <TestFrameContainer
            manifest={manifest}
            partyKey={party.key}
            itemId={item.id}
            mode={DisplayMode.COMPACT}
          />
        </ClientProvider>
      ))}
    </>
  )
};
