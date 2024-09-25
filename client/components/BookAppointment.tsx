'use client';
import { useState } from 'react';
import { Container, Box, Heading, Text, Flex, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { FaUser, FaPhone, FaList } from 'react-icons/fa';
import axios from 'axios';

const RequestForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [request, setRequest] = useState('');
  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async () => {
  try {
    const response = await fetch('/api/emails', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        phoneNumber: phoneNumber,
        request: request
      })
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json(); // Assuming server returns JSON
    setResult({ message: data.message }); // Update result state with message
  } catch (error) {
    setResult({ error: error.message });
  } finally {
    setLoading(false);
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true); // Show loading state
  const data = new FormData(event.target)

  const response = await fetch('/api/contact' , {
    method: 'post',
    body: data,
  });
};


  return (
    <Container maxW="lg" p={{ base: 5, md: 10 }}>
      <Heading as="h2" size="lg" mb="2" fontWeight="bold" textAlign="left">
        Do a Request
      </Heading>
      <Text fontSize="md" color="teal.500" mb="6" textAlign="left">
        Your health is our priority. Please fill in the details below.
      </Text>
      <Box as="form" borderRadius="lg" boxShadow="lg" p="8" mx="auto" maxW="md" onSubmit={handleSubmit}>
        <FormControl mb="4">
          <Flex align="center">
            <FormLabel htmlFor="name">
              Name
            </FormLabel>
          </Flex>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            size="lg"
            focusBorderColor="teal.400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl mb="4">
          <Flex align="center">
            <FormLabel htmlFor="phoneNumber">
              Phone Number
            </FormLabel>
          </Flex>
          <Input
            type="tel" // Set input type to phone number
            id="phoneNumber"
            placeholder="Enter your phone number"
            size="lg"
            focusBorderColor="teal.400"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>
        <FormControl mb="4">
          <Flex align="center">
            <FormLabel htmlFor="request">
              Request
            </FormLabel>
          </Flex>
          <Textarea
            id="request"
            placeholder="Enter your request"
            size="lg"
            focusBorderColor="teal.400"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          size="lg"
          mt="4"
          w="100%"
          isLoading={loading} // Disable button and show loading state
        >
          Submit Request
        </Button>
        {result.error && (
          <Text mt="2" fontSize="sm" color="red.500" textAlign="center">
            Error: {result.error}
          </Text>
        )}
        {result.success && (
          <Text mt="2" fontSize="sm" color="green.500" textAlign="center">
            {result.success}
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default RequestForm;

