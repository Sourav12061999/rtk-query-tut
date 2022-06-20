import React from 'react'
import { useAllDataQuery } from '../app/countryAPI'
function List() {
    const {data,error,isLoading,isSuccess,isError} = useAllDataQuery();
  return (
    <div>
      {
        isLoading && (
            <h1>Loading...</h1>
        )
      }
      <ol>
      {
        isSuccess && (
            data.map((el,index) =>(
             <li key={index}>
                <ul>
                    <li>Country:- {el.country}</li>
                    <li>City:- {el.city}</li>
                    <li>Country Code:- {el.country_code}</li>
                </ul>
             </li>
            ))
        )
      }
      </ol>
    </div>
  )
}

export default List