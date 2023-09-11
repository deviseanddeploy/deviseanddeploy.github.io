import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    // colors: {
    //   sitebase: baseTheme.colors.black,
    // },
    initialColorMode: 'dark',
    useSystemColorMode: false,
    fonts: {
      heading: `'Barlow', sans-serif`,
      body: `'Inter', sans-serif`,
    },
  }
  // withDefaultColorScheme({ colorScheme: 'sitebase' })
);

export default theme;
