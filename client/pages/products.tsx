import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  useColorMode,
  Button,
  Link,
  ColorModeScript,
  Image
} from '@chakra-ui/react';
import { IoMdMedkit, IoIosMedkit, IoIosHeart, IoIosBody } from 'react-icons/io';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import products from '../products.json';

const Products = () => {
  const { colorMode } = useColorMode();

  /*const products = [
    {
      title: 'Oxival',
      description: 'نتكيتيشبشيبسيشب',
      icon: './assets/animals.jpg',
    },
    {
      title: 'Oxival -4',
      description: 'sdfasdfsfasdfs',
      icon: './assets/animals.jpg',
    }
  ];*/


  return (
    <Box>
      <NavBar />
      <Box py={16} mr={16} ml={16}>
        <Flex direction="column" align="center" mb={10}>
          <Heading size="xl" color={colorMode === 'light' ? 'gray.700' : 'white'}>
            Our products
          </Heading>
          <Text mt={2} color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
            Quality healthcare products tailored to your needs.
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {products.map((products) => (
            <Box
              key={products.title}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
            >
              <Image
                src={products.image}
                alt="Product Image"
                boxSize={150}
                borderRadius='10'
                width='full'
              />
              
              <Heading size="md" mb={2} color={colorMode === 'light' ? 'gray.800' : 'white'}>
                {products.title}
              </Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                {products.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Products;

