import React, { useEffect, useState } from "react";
import User from "../components/User";
import { NavLink } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com/users/";
  function getData() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="usersContainer">
      {users &&
        users.map((user) => {
          const { id, name, email } = user;
          return (
            <NavLink key={id} to={`/user/${id}`}>
              <User  name={name} email={email} />
            </NavLink>
          );
        })}
    </div>
  );
}
