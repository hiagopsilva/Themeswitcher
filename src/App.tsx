import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './Styles/Themes/light';

import GlobalStyle from './Styles/global';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={light} >
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
