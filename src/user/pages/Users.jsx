import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Nowf",
      image:
        "https://images.pexels.com/photos/30994394/pexels-photo-30994394/free-photo-of-donkey-grazing-on-rocky-moroccan-hillside.jpeg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
