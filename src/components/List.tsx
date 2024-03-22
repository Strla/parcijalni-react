import React from "react";

import { ListItem } from "./ListItem";
import { List as ChakraList } from "@chakra-ui/react";
import { Repo } from "../App";

interface ListProps {
  listData: Repo[] | undefined;
}

class List extends React.Component<ListProps> {
  render() {
    const { listData } = this.props;
    return (
      <ChakraList spacing={3} h="400px" overflowY={"auto"}>
        {listData?.map((repo) => (
          <ListItem key={repo.id} name={repo.name} />
        ))}
      </ChakraList>
    );
  }
}

export default List;
