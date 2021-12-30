import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// DXOS App using noSSR.
const TaskApp = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const DemoTaskApp = require('@dxos/demo-task-app').TaskApp;
        return <DemoTaskApp />;
      }}
    </BrowserOnly>
  );
}

export default TaskApp;