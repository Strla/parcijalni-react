// const List = ({ listData }: ListProps) => {
//   return <div>List</div>;
// };

// export default List;

import React, { Component } from "react";

export default class List extends Component {
  render() {
    const data = this.props;
    console.log(data);

    return <div></div>;
  }
}
