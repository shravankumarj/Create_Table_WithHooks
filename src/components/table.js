import React from "react";

const Table = ({ users }) => {
  const headers = [];
  users.map(item => {
    users.push(item.id);
  });
  console.log(users[0]);
  return <div>{headers}</div>;
};

export default Table;
