import { Box } from "@chakra-ui/react";
import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";
import Results from "./components/Results";

export interface Repo {
  id: string;
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

  const handleResetData = () => {
    setUserData(undefined);
  };

  return (
    <Box
      h="fit-content"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="center"
      mx={"auto"}
    >
      {userData === undefined ? (
        <Form saveUserData={handleSavingData} />
      ) : (
        <Results data={userData} handleResetData={handleResetData} />
      )}
    </Box>
  );
}

export default App;
