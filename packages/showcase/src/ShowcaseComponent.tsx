import * as React from 'react';

import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import useThemeContext from '@theme/hooks/useThemeContext';

import { Demo } from './Demo';

interface ShowcaseComponentProps {
  component: any,
  rawContent: string,
  exampleUrl: string,
  collapsible: boolean,
  initialOpen: boolean,
}

export const ShowcaseComponent = ({ component, rawContent, exampleUrl, collapsible = true, initialOpen = true }: ShowcaseComponentProps) => {
  // Get docusaurus theme context and set MUI theme mode.
  const { isDarkTheme } = useThemeContext();
  const theme = React.useMemo(() => {
    const mode = isDarkTheme ? 'dark' : 'light';
    return createTheme({
      palette: {
        mode,
      },
    })
  }, [isDarkTheme]);
  return (
    <ThemeProvider theme={theme}>
      <Demo
        component={component}
        rawContent={rawContent}
        collapsible={collapsible}
        initialOpen={initialOpen}
        exampleUrl={exampleUrl}
      />
    </ThemeProvider>
  );
};
