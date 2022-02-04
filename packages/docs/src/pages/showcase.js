import React from 'react';

import Layout from '@theme/Layout';

import { 
  Box,
  Button
} from '@mui/material';

import { examples } from '../data/showcase';

import { ShowcaseCard } from '../components';

const TITLE = 'DXOS Showcase';
const DESCRIPTION = 'List of apps & frames people are building with DXOS';
const EDIT_URL =
  'https://github.com/dxos/web/edit/main/packages/docs/src/data/showcase.js';


// TODO(zarco): use ThemeProvider to normalize buttons and primary colors.

const Showcase = () => {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main>
        <Box sx={{
          backgroundColor: '#1d1f20',
          paddingTop: 10,
          paddingBottom: 10,
          color: 'white'
        }}>
          <Box className='container'>
              <h1>{TITLE}</h1>
              <p>{DESCRIPTION}</p>
              <Button variant='outlined' href={EDIT_URL}>
                Join us by adding your site!
              </Button>
          </Box>
        </Box>
        <Box className='container margin-vert--lg'>
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
        </Box>
      </main>
    </Layout>
  );
};

export default Showcase;
