import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import { useFormState } from "react-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Etown",
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
    title: "Etown",
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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id == placeId);

  const [formState, inputHanler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );

  const placeUpdatedSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace)
    return (
      <div className="center">
        <h2>COULD NOT FIND IT</h2>
      </div>
    );

  return (
    <form className="place-form" onSubmit={placeUpdatedSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid title."
        onInput={inputHanler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter valid description (at least 5 characters)."
        onInput={inputHanler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
