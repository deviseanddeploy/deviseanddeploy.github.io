'use client';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['Contact Us'];

const NavLink = props => {
  const { children } = props;

  console.log(children);
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      href={children.replaceAll(' ', '-').toLowerCase()}
    >
      {children}
    </Box>
  );
};

function NavBar() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'black.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          <HStack spacing={2} alignItems={'center'}>
            <Box as="a" px={2} py={1} rounded={'md'} href={'/'}>
              Devise And Deploy
            </Box>
          </HStack>
          <Flex spacing={6} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              alignItems={'right'}
              display={{ base: 'none', md: 'flex' }}
            >
              {/* {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </HStack>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}

export default NavBar;
