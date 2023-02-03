import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const apiProductSlice:any = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://localhost:7142"}),
    tagTypes:['Products','Companys'],
    endpoints:(builder)=>({
        getProducts:builder.query<any,any>({
          query:(todo)=>({
            url:'/api/Products/AllProduct',
            method:"GET",
            body:todo
          }),
          providesTags:result=>['Products']
        }),
        getCompanys:builder.query<any,any>({
          query:(todo)=>({
            url:'/api/Products/AllCompany',
            method:"GET",
            body:todo
          }),
          providesTags:result=>['Companys']
        }),
        CreateProduct:builder.mutation<any,any>({
          query:(todo)=>({
            url:'/api/Products/CreateProduct',
            method:"POST",
            body:todo
          }),
          invalidatesTags:['Products']
        }),
        getProductById:builder.query<any,any>({
          query:(todo)=>({
            url:"api/Products/GetProductById",
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Products']
        })
    })
})


export const{useGetProductsQuery,useGetProductByIdQuery,useGetCompanysQuery} = apiProductSlice

