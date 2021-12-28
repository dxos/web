import * as React from 'react';

import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { styled, alpha, useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { JavaScriptIcon, TypeScriptIcon } from '../icons';

import HighlightedCode from './HighlightedCode';

const Root = styled('div')(({ theme }) => ({
  marginBottom: 40,
  marginLeft: theme.spacing(-2),
  marginRight: theme.spacing(-2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

const DemoRoot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hiddenToolbar' && prop !== 'bg',
})(({ theme, hiddenToolbar, bg }) => ({
  position: 'relative',
  outline: 0,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    borderRadius: 10,
    ...(bg === 'outlined' && {
      borderLeftWidth: 1,
      borderRightWidth: 1,
    }),
    /* Make no difference between the demo and the markdown. */
    ...(bg === 'inline' && {
      padding: theme.spacing(3),
    }),
    ...(hiddenToolbar && {
      paddingTop: theme.spacing(3),
    }),
  },
  /* Isolate the demo with an outline. */
  ...(bg === 'outlined' && {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${alpha(theme.palette.action.active, 0.12)}`,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  }),
  /* Prepare the background to display an inner elevation. */
  ...(bg === true && {
    padding: theme.spacing(3),
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  }),
  ...(hiddenToolbar && {
    paddingTop: theme.spacing(2),
  }),
}));

const Code = styled(HighlightedCode)(({ theme }) => ({
  padding: 0,
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(0),
  },
  '& pre': {
    margin: '0 auto',
    maxHeight: 'min(68vh, 1000px)',
  },
}));

const DemoToolbar = ({codeMode, onCodeModeSelect}) => {
  const theme = useTheme();
  return (
    <ToggleButtonGroup
      sx={{ margin: '8px 0' }}
      exclusive
      value={codeMode}
      onChange={onCodeModeSelect}
    >
      <ToggleButton
        sx={{
          padding: '5px 10px',
          color: () => theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
          borderRadius: 0.5,
          borderColor: () => theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.black
        }}
        value={'JS'}
      >
        <JavaScriptIcon sx={{ fontSize: 20 }} />
      </ToggleButton>
      <ToggleButton
        sx={{
          padding: '5px 10px',
          color: () => theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
          borderRadius: 0.5,
          borderColor: () => theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.black
        }}
        value={'TS'}
        
      >
        <TypeScriptIcon sx={{ fontSize: 20 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export const Demo = ({ component, rawContent }) => {
  const [codeMode, setCodeMode] = React.useState('JS');
  const DemoComponent = component;
  return (
    <Root>
      <DemoRoot
        hiddenToolbar={true}
        bg={'outlined'}
        id={'demo-id'}
      >
        <DemoComponent />
      </DemoRoot>
      <DemoToolbar codeMode={codeMode} onCodeModeSelect={(_, mode) => {
        setCodeMode(mode);
      }} />
      <Box>
        {codeMode === 'JS' && <Code
          id={'demo-id'}
          code={rawContent.js}
          language={'jsx'}
        />}
        {codeMode === 'TS' && <Code
          id={'demo-id-ts'}
          code={rawContent.ts}
          language={'jsx'}
        />}
      </Box>
    </Root>
  );
}
