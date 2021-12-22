//
// Copyright 2021 DXOS.org
//

import React, { useState } from 'react';

export const AnotherTest = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      Hello!!
      <button onClick={() => {
        setCount(count + 1);
      }}>click!</button>
      <p>CLICKs: { count }</p>
    </div>
  );
};
