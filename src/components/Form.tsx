import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Repo, UserData } from "../App";
import axios from "axios";

interface FormProps {
  saveUserData: (userData: UserData) => void;
}

const Form = ({ saveUserData }: FormProps) => {
  const [username, setUsername] = useState("");
  const [userRepos, setUserRepos] = useState<Repo[]>([]);

  const handleUsernameInput = (name: string) => {
    setUsername(name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userResponse = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const reposResponse = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    const catsResponse = await axios.get("https://catfact.ninja/facts");

    console.log(catsResponse);

    const userData = {
      avatar_url: userResponse.data.avatar_url,
      name: userResponse.data.name,
      location: userResponse.data.location,
      bio: userResponse.data.bio,
    };

    let userRepos: Repo[] = [];

    reposResponse.data.forEach((repo: any) => {
      userRepos.push({ name: repo.name });
    });

    const userAndRepoData = {
      user: userData,
      repos: userRepos,
    };

    saveUserData(userAndRepoData);

    setUsername("");
  };

  return (
    <VStack border="1px solid black" p="1.5rem" h="20rem" w="50rem">
      <form style={{ width: "100%", height: "100%" }} onSubmit={handleSubmit}>
        <Box
          w="100%"
          h="100%"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          gap="4rem"
        >
          <Box>
            <Text>Github username:</Text>
            <Input
              type="text"
              mt="1rem"
              value={username}
              onChange={(e) => handleUsernameInput(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            w="100%"
            bgColor={"black"}
            color={"white"}
            _hover={{ bgColor: "black" }}
          >
            GO!
          </Button>
        </Box>
      </form>
    </VStack>
  );
};

export default Form;
