import React from 'react';

import Layout from '@theme/Layout';

import { examples } from '../data/showcase';

const TITLE = 'DXOS Showcase';
const DESCRIPTION = 'List of apps & frames people are building with DXOS';
const EDIT_URL =
  'https://github.com/dxos/web/edit/main/packages/docs/src/data/showcase.js';

const Showcase = () => {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main>
        <section>
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
          <a href={EDIT_URL}>Join us by adding your site!</a>
        </section>
        <section>
          {examples.map(example => (
            <p key={example.id}>
              <a href={example.location}>
                {example.title}
              </a>
            </p>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Showcase;
