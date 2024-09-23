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
} from '@chakra-ui/react';
import { IoMdMedkit, IoIosMedkit, IoIosHeart, IoIosBody } from 'react-icons/io';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Products = () => {
  const { colorMode } = useColorMode();

  const products = [
    {
      title: 'Medical Consultation',
      description: 'Expert medical advice and consultation for your health concerns.',
      icon: <IoMdMedkit size="2em" />,
    },
    {
      title: 'Diagnostic Tests',
      description: 'Comprehensive diagnostic tests to accurately assess your health condition.',
      icon: <IoIosMedkit size="2em" />,
    },
    {
      title: 'Specialized Treatments',
      description: 'Tailored treatment plans for various medical conditions.',
      icon: <IoIosHeart size="2em" />,
    },
    {
      title: 'Preventive Care',
      description: 'Guidance and products to maintain good health and prevent illnesses.',
      icon: <IoIosBody size="2em" />,
    },
  ];

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
              <Flex justify="center" mb={4}>
                {products.icon}
              </Flex>
              <Heading size="md" mb={2} color={colorMode === 'light' ? 'gray.800' : 'white'}>
                {products.title}
              </Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                {products.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={8}>
          <Button
            as={Link}
            href="/#BookAppointment" 
            colorScheme="teal"
            size="lg"
          >
            Book Appointment
          </Button>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Products;

