//
// Copyright 2021 DXOS.org
//

import 'setimmediate';

import React, { useEffect } from 'react';

import { ClientProvider, useClient, useProfile, useSelection } from '@dxos/react-client';
import { ObjectModel } from '@dxos/object-model';
import { Button, Box } from '@mui/material';

const TEST_TYPE = 'zarco.testingType';

const Main = () => {
  const client = useClient();
  const profile = useProfile();
  const [party, setParty] = React.useState();
  const items = useSelection(party?.database.select(selection =>
    selection.filter({ type: TEST_TYPE }).items
  ), [party?.key]) || [];
  useEffect(() => {
    setImmediate(async () => {
      if (!profile) {
        await client.halo.createProfile();
        const party = await client.echo.createParty();
        await party.setProperty('title', 'Test Party');
        setParty(party);
      }
    });
  }, [profile]);
  return (
    <Box>
      <Button onClick={() => {
        party?.database.createItem({
          model: ObjectModel,
          type: TEST_TYPE,
          props: {
            title: 'hello' + Date.now()
          }
        });
      }}>Add Item</Button>
      {items.length && items.map((item) => {
        return (
          <Box>
            {item.id}
          </Box>
        );
      })}
    </Box>
  );
}

const TodoApp = () => {
  return (
    <ClientProvider>
      <Main />
    </ClientProvider>
  );
};


export default TodoApp;