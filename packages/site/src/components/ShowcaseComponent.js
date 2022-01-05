import * as React from 'react';

import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import useThemeContext from '@theme/hooks/useThemeContext';

import { Demo } from './Demo';

export const ShowcaseComponent = ({ component, rawContent }) => {
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
      />
    </ThemeProvider>
  );
};
