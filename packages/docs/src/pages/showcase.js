import React from 'react';

import Layout from '@theme/Layout';

import { Box } from '@mui/material';

import { examples } from '../data/showcase';

import { ShowcaseCard } from '../components';

const TITLE = 'DXOS Showcase';
const DESCRIPTION = 'List of apps & frames people are building with DXOS';
const EDIT_URL =
  'https://github.com/dxos/web/edit/main/packages/docs/src/data/showcase.js';

const Showcase = () => {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="container margin-vert--lg">
        <section>
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
          <a className='button button--primary button--lg' href={EDIT_URL}>Join us by adding your site!</a>
        </section>
        <section className='margin-vert--lg'>
          <Box className='row'>
            {examples.map(example => (
              <Box
                key={example.id}
                sx={{
                  display: 'flex',
                  flex: 1
                }} 
                className='col col--4 margin-bottom--md'>
                <ShowcaseCard
                  data={example}
                />
              </Box>
            ))}
          </Box>
        </section>
      </main>
    </Layout>
  );
};

export default Showcase;
