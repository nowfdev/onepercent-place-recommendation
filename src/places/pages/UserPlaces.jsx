import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Etown",
    description: "Bosch",
    imageUrl:
      "https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-etown-1-building-cong-hoa.jpg",
    adress: "Đ. Cộng Hòa, Phường 13, Tân Bình, Hồ Chí Minh, Việt Nam",
    location: {
      lat: 10.80201,
      lng: 106.6388055,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Etown",
    description: "Bosch",
    imageUrl:
      "https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-etown-1-building-cong-hoa.jpg",
    adress: "Đ. Cộng Hòa, Phường 13, Tân Bình, Hồ Chí Minh, Việt Nam",
    location: {
      lat: 10.80201,
      lng: 106.6388055,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
