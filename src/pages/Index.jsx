import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Heading, Text, Button, Input, FormControl, FormLabel, useToast, Image, List, ListItem } from "@chakra-ui/react";
import { FaHeart, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chuddinessText, setChuddinessText] = useState("");
  const [itemDupes, setItemDupes] = useState([]);
  const toast = useToast();

  const handleLogin = async () => {
    // Implement login logic here
    // Placeholder for API call
    const fakeAccessToken = "fake-access-token";
    setIsLoggedIn(true);
    setAccessToken(fakeAccessToken);
    toast({ title: "Logged in successfully!", status: "success", duration: 2000 });
  };

  const handleSignup = async () => {
    // Implement signup logic here
    // Placeholder for API call
    toast({ title: "Signed up successfully!", status: "success", duration: 2000 });
  };

  const checkHealth = async () => {
    // Implement healthcheck logic here
    // Placeholder for API call
    toast({ title: "Backend is healthy!", status: "success", duration: 2000 });
  };

  const analyzeChuddiness = async () => {
    // Implement chuddiness analysis here
    // Placeholder for API call
    toast({ title: "Chuddiness analyzed!", description: "Your text is 100% chuddy!", status: "info", duration: 2000 });
  };

  const fetchItemDupes = async () => {
    // Implement fetch item dupes here
    // Placeholder for API call
    setItemDupes(["Item 1", "Item 2", "Item 3"]);
  };

  return (
    <ChakraProvider>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Welcome to the Chuddy Frontend!</Heading>
          <Text mt={4}>Let's make sure everything is chuddy here!</Text>
          <Button leftIcon={<FaHeart />} colorScheme="pink" onClick={checkHealth}>
            Healthcheck
          </Button>
        </Box>
        {!isLoggedIn ? (
          <Box p={5} shadow="md" borderWidth="1px">
            <VStack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
                Login
              </Button>
              <Button leftIcon={<FaUserPlus />} colorScheme="blue" onClick={handleSignup}>
                Signup
              </Button>
            </VStack>
          </Box>
        ) : (
          <Box p={5} shadow="md" borderWidth="1px">
            <VStack spacing={4}>
              <FormControl id="chuddiness">
                <FormLabel>Type something chuddy</FormLabel>
                <Input value={chuddinessText} onChange={(e) => setChuddinessText(e.target.value)} />
              </FormControl>
              <Button colorScheme="orange" onClick={analyzeChuddiness}>
                Analyze Chuddiness
              </Button>
              <List spacing={3}>
                {itemDupes.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
              <Button colorScheme="green" onClick={fetchItemDupes}>
                Fetch Item Dupes
              </Button>
            </VStack>
          </Box>
        )}
        <Image src="https://images.unsplash.com/photo-1582456891925-a53965520520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHl8ZW58MHx8fHwxNzEwMjg3MzcyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chuddy Puppy" />
      </VStack>
    </ChakraProvider>
  );
};

export default Index;
