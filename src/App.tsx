import { Box, Center } from "@chakra-ui/react";
import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";
import Results from "./components/Results";

export interface Repo {
  name: string;
}

export interface UserData {
  user: {
    avatar_url: string;
    name: string;
    location: string;
    bio: string;
  };
  repos: Repo[];
}

function App() {
  const [userData, setUserData] = useState<UserData>();

  const handleSavingData = (data: UserData) => {
    setUserData(data);
  };

  return (
    <Box
      h="100%"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Form saveUserData={handleSavingData} />
    </Box>
  );
}

export default App;
