import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import Main from './pages/main';
import NavBar from './components/navbar';
import Footer from './components/footer';
// import { ColorModeSwitcher } from './components/ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher /> */}
      <NavBar />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
