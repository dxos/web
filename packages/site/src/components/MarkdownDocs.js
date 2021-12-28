import * as React from 'react';
import PropTypes from 'prop-types';
import { Demo } from './Demo';
import MarkdownElement from './MarkdownElement';
import { exactProp } from '@mui/utils';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import useThemeContext from '@theme/hooks/useThemeContext';

function MarkdownDocs(props) {
  const { demos = {}, docs, demoComponents } = props;
  const userLanguage = 'en';
  const { rendered, headers } = docs[userLanguage];

  return (
    <Box>
      {rendered.map((renderedMarkdownOrDemo, index) => {
        if (typeof renderedMarkdownOrDemo === 'string') {
          return <MarkdownElement key={index} renderedMarkdown={renderedMarkdownOrDemo} />;
        }

        if (renderedMarkdownOrDemo.component) {
          const Component = markdownComponents[renderedMarkdownOrDemo.component];
          return <Component key={index} headers={headers} options={renderedMarkdownOrDemo} />;
        }

        const name = renderedMarkdownOrDemo.demo;
        const demo = demos?.[name];
        if (demo === undefined) {
          const errorMessage = [
            `Missing demo: ${name}. You can use one of the following:`,
            Object.keys(demos),
          ].join('\n');

          if (userLanguage === 'en') {
            throw new Error(errorMessage);
          }

          if (process.env.NODE_ENV !== 'production') {
            console.error(errorMessage);
          }

          const warnIcon = (
            <span role="img" aria-label={t('emojiWarning')}>
              ⚠️
            </span>
          );
          return (
            <div key={index}>
              {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
              {warnIcon} Missing demo `{name}` {warnIcon}
            </div>
          );
        }
        const demoComponent = demoComponents[demo.module];

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
              key={'component-demo-' + index}
              component={demoComponent}
              rawContent={{
                js: demo.raw,
                ts: demo.rawTS
              }}
            />
          </ThemeProvider>
        );
      })}
    </Box>
  );
}

MarkdownDocs.propTypes = {
  demoComponents: PropTypes.object,
  demos: PropTypes.object,
  disableAd: PropTypes.bool,
  disableToc: PropTypes.bool,
  docs: PropTypes.object.isRequired,
};

if (process.env.NODE_ENV !== 'production') {
  MarkdownDocs.propTypes = exactProp(MarkdownDocs.propTypes);
}

export default MarkdownDocs;
