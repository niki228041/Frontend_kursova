import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"



export const apiProductSlice:any = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://localhost:7142"}),
    tagTypes:['Products','Companys'],
    endpoints:(builder)=>({
        getProducts:builder.query<any,any>({
          query:(todo)=>({
            url:'/api/Products/AllProduct',
            method:"POST",
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
        }),
        getProductByUserId:builder.query<any,any>({
          query:(todo)=>({
            url:"/api/Products/GetProductByUserId",
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Products']
        }),
        CreateProductMessage:builder.mutation<any,any>({
          query:(todo)=>({
            url:"api/Products/CreateNewProductMessage",
            method:"POST",
            body:todo
          }),
          invalidatesTags:['Products']
        })
        ,
        getAllProductMessageByProductId:builder.query<any,any>({
          query:(todo)=>({
            url:"api/Products/AllCommentByProductId",
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Products']
        })
        ,
        getImagesByProductId:builder.query<any,any>({
          query:(todo)=>({
            url:"api/Products/GetImagesByProductId",
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Products']
        })
        ,
        getFirstImages:builder.query<any,any>({
          query:(todo)=>({
            url:"api/Products/GetFirstImages",
            method:"POST",
            body:todo
          }),
          providesTags:result=>['Products']
        })
        ,
        deleteProductById:builder.mutation<any,any>({
          query:(todo)=>({
            url:"api/Products/DeleteProductById",
            method:"POST",
            body:todo
          }),
          invalidatesTags:['Products']
        })
        ,
        getAssetByProductId:builder.mutation<any,any>({
          query:(todo)=>({
            url:"api/Products/GetAssetByProductId",
            method:"POST",
            body:todo
          }),
          invalidatesTags:['Products']
        })
        
    })
})


export const{useGetProductsQuery,useGetProductByIdQuery,useGetCompanysQuery,useGetAllProductMessageByProductIdQuery,useGetProductByUserIdQuery,useGetImagesByProductIdQuery,
             useGetFirstImagesQuery} = apiProductSlice

