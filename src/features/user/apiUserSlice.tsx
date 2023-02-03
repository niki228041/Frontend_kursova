import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const apiUserSlice:any = createApi({
    reducerPath:"use",
    baseQuery:fetchBaseQuery({baseUrl:"https://localhost:7142"}),
    tagTypes:['Users'],
    endpoints:(builder)=>({
        getUserByEmail:builder.query<any,any>({
          query:(todo)=>({
            url:"api/Account/GetUserByEmail",
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Users']
        })
    })
})


export const{useGetUserByEmailQuery} = apiUserSlice

