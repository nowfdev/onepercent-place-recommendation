import React from "react";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user_item__infor">
          <h2>Username: {props.name}</h2>
          <h3>
            Place Count: {props.placeCount}{" "}
            {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
