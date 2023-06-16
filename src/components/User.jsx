import React from "react";

export default function User({ name, email }) {
  return (
    <div className="user">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
