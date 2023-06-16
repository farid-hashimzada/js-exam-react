import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import SimpleBadge from "../pages/SimpleBadge";

const AppRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/badge" element={<SimpleBadge />} />
        
      </Routes>
    </>
  );
};

export default AppRouting;
