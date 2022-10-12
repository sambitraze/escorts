import React from "react";
import UserFormCard from "../../components/Cards/UserFormCard";
import Admin from "../../layouts/Admin";

const add_user = () => {
  return (
    <div>
      <UserFormCard />
    </div>
  );
};

export default add_user;

add_user.layout = Admin;
