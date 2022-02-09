//
// Copyright 2021 DXOS.org
//

import React, { useEffect, useMemo, useState } from 'react';

import { Client } from '@dxos/client';
import { ClientProvider } from '@dxos/react-client';
import { DisplayMode, FrameContainer, FrameFactoryProvider, StaticFrameFactory } from '@dxos/react-framekit';
import { manifest } from '@dxos/tasks-frame';

// TODO(wittjosiah): Factor out.
const usePartyBootstrap = () => {
  const [inviterClient, setInviterClient] = useState();
  const [joinerClient, setJoinerClient] = useState();
  const [inviterParty, setInviterParty] = useState();
  const [joinerParty, setJoinerParty] = useState();

  useEffect(() => {
    setImmediate(async () => {
      const inviter = new Client();
      await inviter.initialize();

      const joiner = new Client();
      await joiner.initialize();

      await inviter.halo.createProfile({ username: 'inviter' });
      await joiner.halo.createProfile({ username: 'joiner' });

      const inviterParty = await inviter.echo.createParty();
      const invitation = await inviterParty.createInvitation();
      const joinerParty = await joiner.echo.acceptInvitation(invitation.descriptor).getParty();

      setInviterClient(inviter);
      setJoinerClient(joiner);
      setInviterParty(inviterParty);
      setJoinerParty(joinerParty);
    });
  }, []);

  return {
    inviterClient,
    inviterParty,
    joinerClient,
    joinerParty
  }
};

const Peer = ({ client, partyKey, itemId }) => {
  const frame = 'dxos:frame';
  const factory = useMemo(() => new StaticFrameFactory({ [frame]: manifest }), []);

  return (
    <ClientProvider client={client}>
      <FrameFactoryProvider factory={factory}>
        <FrameContainer
          frame={frame}
          partyKey={partyKey}
          itemId={itemId}
          mode={DisplayMode.COMPACT}
        />
      </FrameFactoryProvider>
    </ClientProvider>
  );
};

export const Main = () => {
  const { inviterClient, inviterParty, joinerClient, joinerParty } = usePartyBootstrap();
  const [item, setItem] = useState();

  useEffect(() => {
    if (joinerParty) {
      setImmediate(async () => {
        const item = await manifest.createRootItem(joinerParty);
        setItem(item);
      });
    }
  }, [joinerParty]);

  if (!item) {
    return null;
  }

  return (
    <>
      <Peer client={inviterClient} partyKey={inviterParty.key} itemId={item.id} />
      <Peer client={joinerClient} partyKey={joinerParty.key} itemId={item.id} />
    </>
  )
};
