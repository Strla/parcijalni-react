import { ListItem as ChakraListItem, Text } from "@chakra-ui/react";

interface ListItemProps {
  name: string;
}

export const ListItem = ({ name }: ListItemProps) => {
  return (
    <ChakraListItem
      paddingX="4"
      paddingY="2"
      boxShadow="base"
      borderRadius="md"
    >
      <Text fontSize="lg">{name}</Text>
    </ChakraListItem>
  );
};
