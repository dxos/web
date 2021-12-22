import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Simple, SimpleWithState, MaterialSimple, MaterialWithState } from '@dxos/sanity';
// import { Test } from '@dxos/demo-task-app';
// import { AnotherTest } from '../components/AnotherTest';

export const DemoApp = () => {
  return (
    <div>
      <h2>Components</h2>
      <Simple />
      <SimpleWithState />
      <MaterialSimple />
      <MaterialWithState />
    </div>
  );
}
