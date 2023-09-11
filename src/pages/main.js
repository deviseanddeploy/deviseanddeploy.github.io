import React from 'react';

import { Box, Center, Text, Grid, Heading, Spacer } from '@chakra-ui/react';

function Main() {
  return (
    <>
      <Grid minH={'80vh'}>
        <Center>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" padding={5}>
              Devise And Deploy
            </Heading>
            <Text padding={5}>
              Devise And Deploy LLC is an organization dedicated to the delivery
              of top quality, production ready software solutions for any
              client.
            </Text>
            <Text>Please direct any inquiries to</Text>
            <Text>contact [at] deviseanddeploy [dot] io</Text>
          </Box>
        </Center>
      </Grid>
    </>
  );
}

export default Main;
