import React from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { UserData } from "../App";

interface ResultsProps {
  data: UserData | undefined;
}

const Results = ({ data }: ResultsProps) => {
  return (
    <Box>
      <Box display="flex" gap="2rem">
        <Image src={data?.user.avatar_url} alt="avatar" h="100px" />
        <Text size="30px">{data?.user.name}</Text>
      </Box>
      <Box display="flex" flexDir="column" gap={"2rem"}>
        <Text>BIO: {data?.user.bio}</Text>
        <Text>LOCATION: {data?.user.location}</Text>
        <Text>REPOSITORIES:</Text>
      </Box>
    </Box>
  );
};

export default Results;
