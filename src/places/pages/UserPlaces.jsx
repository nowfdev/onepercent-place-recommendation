import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

import "./PlaceForm.css";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Etown1",
    description: "Bosch",
    imageUrl:
      "https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-etown-1-building-cong-hoa.jpg",
    address: "Đ. Cộng Hòa, Phường 13, Tân Bình, Hồ Chí Minh, Việt Nam",
    location: {
      lat: 10.80201,
      lng: 106.6388055,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Etown2",
    description: "Bosch",
    imageUrl:
      "https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-etown-1-building-cong-hoa.jpg",
    address: "Đ. Cộng Hòa, Phường 13, Tân Bình, Hồ Chí Minh, Việt Nam",
    location: {
      lat: 10.80201,
      lng: 106.6388055,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
