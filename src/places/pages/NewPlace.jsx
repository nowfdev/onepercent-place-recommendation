import React, { useCallback, useReducer } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import "./PlaceForm.css";

const NewPlace = () => {
  const [formState, inputHanler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHanlder = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHanlder}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHanler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHanler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHanler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
