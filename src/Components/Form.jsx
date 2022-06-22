import React, { useState, useEffect } from "react";
import { useCreateCityMutation } from "../app/countryAPI";
function Form({ setIsRefetch }) {
  const [createData, result] = useCreateCityMutation();
  useEffect(() => {
    if (result.isSuccess) {
      setIsRefetch(true);
    }
  }, [result.isSuccess]);

  return (
    <div style={{ width: "30%" }}>
      <h1>Create a City</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const obj = {
            country: event.target.country.value,
            city: event.target.city.value,
            c_code: event.target.c_code.value,
            id: Date.now(),
          };
          console.log(obj);
          createData(obj);
        }}
      >
        <input id="country" placeholder="Country" type="text" />
        <input id="city" placeholder="City" type="text" />
        <input id="c_code" placeholder="Country Code" type="text" />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
}

export default Form;
