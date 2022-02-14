import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

import { 
  Box,
  Button
} from '@mui/material';

import { ShowcaseCard } from '../components';

const Constants = {
  TITLE: 'DXOS Showcase',
  DESCRIPTION: 'List of apps & frames people are building with DXOS',
  EDIT_URL: 'https://github.com/dxos/web/edit/main/packages/docs/src/data/showcase.js'
}

const ShowcaseList = ({ examples }) => {
  return (
    <>
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
    </>
  );
};

// TODO(zarco): use ThemeProvider to normalize buttons and primary colors.
const Showcase = () => {
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
            <BrowserOnly fallback={<div>Loading...</div>}>
              {() => {
                const { useShowcaseRecords } = require('../hooks');
                const examples = useShowcaseRecords();
                return <ShowcaseList examples={examples}/>;
              }}
            </BrowserOnly>
          </Box>
        </Box>
      </main>
    </Layout>
  );
};

export default Showcase;
