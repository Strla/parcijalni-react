import { Box, Button, Image, Text } from "@chakra-ui/react";
import { UserData } from "../App";
import List from "./List";

interface ResultsProps {
  data: UserData | undefined;
  handleResetData: () => void;
}

const Results = ({ data, handleResetData }: ResultsProps) => {
  return (
    <Box h="100%" px="2rem" py={"3rem"}>
      <Box display="flex" gap="2rem" alignItems="center" mb="2rem">
        <Image src={data?.user.avatar_url} alt="avatar" h="100px" />
        <Text fontSize="6xl">{data?.user.name || "No name available"}</Text>
      </Box>
      <Box display="flex" flexDir="column" gap={"2rem"} mb="1rem">
        <Text>BIO: {data?.user.bio || "No bio available"}</Text>
        <Text>LOCATION: {data?.user.location || "No location available"}</Text>
        <Text>REPOSITORIES:</Text>
      </Box>
      <List listData={data?.repos} />
      <Button w="100%" onClick={handleResetData} mt="1rem">
        Restart
      </Button>
    </Box>
  );
};

export default Results;
