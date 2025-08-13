import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDecryptedAccessToken } from "../../utils/tokenUtils";

//custom fetchBaseQuery 
const baseQueryCustom  = fetchBaseQuery({
  baseUrl:import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) =>{
      const accessToken = getDecryptedAccessToken();

      if(accessToken){
         headers.set('authorization', accessToken);
      }
      return headers;
  }

})

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryCustom,
  // tagTypes: ["product"],
  endpoints: () => ({})
});
