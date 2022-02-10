import * as React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';

import { Box, Button, ToggleButtonGroup, ToggleButton, Collapse } from '@mui/material';
import { MUIStyledCommonProps } from '@mui/system';

import { styled, alpha, useTheme } from '@mui/material/styles';

import { JavaScriptIcon, TypeScriptIcon } from './icons';
import { HighlightedCode } from './HighlightedCode';

const Root = styled('div')(({ theme }) => ({
  marginBottom: 40,
  marginLeft: theme.spacing(-2),
  marginRight: theme.spacing(-2),
  [theme.breakpoints.up('sm')]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

interface DemoRootProps extends MUIStyledCommonProps {
  hiddenToolbar: any,
  bg: any
}

const DemoRoot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hiddenToolbar' && prop !== 'bg',
})<DemoRootProps>(({ theme, hiddenToolbar, bg }) => ({
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

const DemoToolbar = ({
  codeMode,
  codeOpen,
  exampleUrl,
  onCodeModeSelect,
  onCollapse,
  showTSButton,
  showJSButton,
  showCollapseButton,
  showExampleButton
}) => {
  const theme = useTheme();
  const toggleButtonStyles = {
    padding: '5px 10px',
    color: () => theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    borderRadius: 0.5,
    borderColor: () => theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    '&.Mui-selected, &.Mui-selected:hover': {
      color: () => theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
      backgroundColor: () => theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[200]
    }
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
      <ToggleButtonGroup
        sx={{ 
          margin: '8px 0'
        }}
        exclusive
        value={codeMode}
        onChange={onCodeModeSelect}
      >
        {showJSButton && <ToggleButton
          sx={toggleButtonStyles}
          value={'JS'}
        >
          <JavaScriptIcon sx={{ fontSize: 20 }} />
        </ToggleButton>}
        {showTSButton && <ToggleButton
          sx={toggleButtonStyles}
          value={'TS'}
        >
          <TypeScriptIcon sx={{ fontSize: 20 }} />
        </ToggleButton>}
      </ToggleButtonGroup>
      <Box>
        {showExampleButton && exampleUrl && (
          <Button
            sx={{
              marginTop: 1,
              marginBottom: 1,
              marginRight: 0.5
            }}
            variant='outlined'
            href={exampleUrl}
            target={'_blank'}
          >
            SEE EXAMPLE
          </Button>
        )}
        {showCollapseButton && (
          <Button
            sx={{
              marginTop: 1,
              marginBottom: 1
            }}
            variant='outlined'
            onClick={() => {
              onCollapse();
            }}
          >
            {codeOpen ? 'Hide Code' : 'Show Code'}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export const Demo = ({ component, rawContent, collapsible, exampleUrl, initialOpen }) => {
  const [codeMode, setCodeMode] = React.useState('JS');
  const [open, setOpen] = React.useState(initialOpen);
  React.useEffect(() => {
    if (!rawContent.js && rawContent.ts) {
      setCodeMode('TS');
    }
  }, []);
  return (
    <Root>
      <DemoRoot
        hiddenToolbar={true}
        bg={'outlined'}
        id={'demo-id'}
      >
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const DemoComponent = component().Main;
            return <DemoComponent />;
          }}
        </BrowserOnly>
      </DemoRoot>
      <DemoToolbar
        codeMode={codeMode}
        codeOpen={open}
        exampleUrl={exampleUrl}
        showCollapseButton={collapsible}
        showExampleButton={!!exampleUrl}
        showJSButton={!!rawContent.js}
        showTSButton={!!rawContent.ts}
        onCodeModeSelect={(_, mode) => {
          if (mode && mode !== codeMode) {
              setCodeMode(mode);
            }
          }
        }
        onCollapse={() => {
          setOpen(!open);
        }}
      />
      <Collapse in={open}>
        {codeMode === 'JS' && !!rawContent.js && <Code
          code={rawContent.js}
          language={'jsx'}
        />}
        {codeMode === 'TS' && !!rawContent.ts && <Code
          code={rawContent.ts}
          language={'tsx'}
        />}
      </Collapse>
    </Root>
  );
}
