//
// Copyright 2021 DXOS.org
//

import 'setimmediate';
import React, { useEffect } from 'react';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { Button, Box } from '@mui/material';

const TEST_TYPE = 'zarco.testingType';
let TodoApp = () => {
  return (
    <Box>
      Loading...
    </Box>
  );
};

if (ExecutionEnvironment.canUseDOM) {
  const { ClientProvider, useClient, useProfile, useSelection } = require('@dxos/react-client');
  const { ObjectModel } = require('@dxos/object-model');
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
            <Box key={item.id}>
              {item.id}
            </Box>
          );
        })}
      </Box>
    );
  }
  
  TodoApp = () => {
    return (
      <ClientProvider>
        <Main />
      </ClientProvider>
    );
  };
  
}

export default TodoApp;
