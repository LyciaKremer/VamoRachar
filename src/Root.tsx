import { useState } from 'react';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import GlobalStyle from './styles/GlobalStyle';

export default function Root() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <App toggleTheme={() => setIsDark(!isDark)} />
    </ThemeProvider>
  );
}
