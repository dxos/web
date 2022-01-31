import * as React from 'react';
import CodeBlock from '@theme-original/CodeBlock';

export const HighlightedCode = ({ code, language }) => {
  return (
    <CodeBlock className={`language-${language}`} title="test">
      { code }
    </CodeBlock>
  );
};
