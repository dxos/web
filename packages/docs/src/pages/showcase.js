import React, { useMemo } from 'react';

import Layout from '@theme/Layout';

import { 
  Box,
  Button
} from '@mui/material';

// import { examples } from '../data/showcase';

import { ShowcaseCard } from '../components';

import { useShowcaseRecords } from '../hooks';

const Constants = {
  TITLE: 'DXOS Showcase',
  DESCRIPTION: 'List of apps & frames people are building with DXOS',
  EDIT_URL: 'https://github.com/dxos/web/edit/main/packages/docs/src/data/showcase.js'
}

// TODO(zarco): use ThemeProvider to normalize buttons and primary colors.
const Showcase = () => {
  const examples = useShowcaseRecords();
  return (
    <Layout title={Constants.TITLE} description={Constants.DESCRIPTION}>
      <main>
        <Box sx={{
          backgroundColor: '#1d1f20',
          paddingTop: 10,
          paddingBottom: 10,
          color: 'white'
        }}>
          <Box className='container'>
              <h1>{Constants.TITLE}</h1>
              <p>{Constants.DESCRIPTION}</p>
              <Button variant='outlined' href={Constants.EDIT_URL}>
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
