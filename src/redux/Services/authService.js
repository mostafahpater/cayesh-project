import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:5000/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().users.userToken
        if (token) {
            console.log(token)
         // include token in req header
          headers.set('authorization', `Bearer ${token}`)  
          return headers
        }

    }
}),
    endpoints: (builder) => ({
        loginUser: builder.query({
          query: (body) =>{
            return {
            url: 'user/profile',
            method: 'GET',
            body
          }},
        }),
      }),
 
})
export const { useLoginUserQuery } = authApi