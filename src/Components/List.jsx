import React, { useEffect } from "react";
import { useAllDataQuery } from "../app/countryAPI";
function List({ isRefetch, setIsRefetch }) {
  const { data, error, isLoading, isSuccess, isError, refetch } =
    useAllDataQuery();
  useEffect(() => {
    if (isRefetch) {
      refetch();
      setIsRefetch(true);
    }
  }, [isRefetch]);

  return (
    <div style={{ width: "30%" }}>
      {isLoading && <h1>Loading...</h1>}
      <ol>
        {isSuccess &&
          data.map((el, index) => (
            <li key={index}>
              <ul>
                <li>Country:- {el.country}</li>
                <li>City:- {el.city}</li>
                <li>Country Code:- {el.c_code}</li>
              </ul>
            </li>
          ))}
      </ol>
      {isError && <h2>{"Error..."}</h2>}
    </div>
  );
}

export default List;
