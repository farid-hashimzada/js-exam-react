import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function UserDetail() {
  const BASE_URL = "https://jsonplaceholder.typicode.com/users/";
  const [user, setUser] = useState([]);
  const { name, email } = user;
  const { id } = useParams();
  function getData() {
    fetch(BASE_URL + id)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }

  useEffect(() => {
    getData()
  },[]);
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
