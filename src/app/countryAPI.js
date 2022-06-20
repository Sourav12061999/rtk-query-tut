import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const countryApi=createApi({
    reducerPath:"countryApis",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:5000/data"
    }),
    endpoints:(builder) => ({
     allData:builder.query({
        query:() =>({
            url:"/",
            method:"GET",
            mode:"no-cors"
        })
     })
    })
});
export default countryApi;
export const {useAllDataQuery} = countryApi;