import React, { useState, useEffect } from "react";

const PopulateTable = () => {
  const [users, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
      const resjson = await res.json();

      setUser(resjson);
    };
    fetchUser();
  }, []);

  const generateHeader = users => {
    let headers = [];

    if (users !== null) {
      const keys = Object.keys(users[0]);

      for (let i = 0; i < keys.length; i++) {
        headers.push(<th className="keys">{keys[i]}</th>);
      }
    }
    return headers;
    // return <div>Hello</div>;
  };
  const generateTableData = users => {
    let res = [];

    if (users !== null) {
      for (let i = 0; i < users.length; i++) {
        res.push(
          <tr>
            <td key={users[i].id}>{users[i].id}</td>
            <td key={users[i].name}>{users[i].name}</td>
            <td key={users[i].username}>{users[i].username}</td>
            <td key={users[i].email}>{users[i].email}</td>
          </tr>
        );
        //console.log(users[i])
        // for (let [key, value] of Object.entries(users[i])) {

        //   // console.log(`${key}: ${value}`);
        // }
      }
    }
    return res;
  };
  return (
    <div>
      <table>
        <thead>
          <tr>{generateHeader(users)}</tr>
        </thead>
        <tbody>{generateTableData(users)}</tbody>
      </table>
    </div>
  );
};
export default PopulateTable;
