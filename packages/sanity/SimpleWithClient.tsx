//
// Copyright 2021 DXOS.org
//

import React, { useState } from 'react';

import { ClientProvider } from '@dxos/react-client';

export const SimpleWithClient = () => {
  const [count, setCount] = useState(1);

  return (
    <ClientProvider>
      <div>
        Hello!!
        <button onClick={() => {
          setCount(count + 1);
        }}>click!</button>
        <p>CLICKs: { count }</p>
      </div>
    </ClientProvider>
  );
};
