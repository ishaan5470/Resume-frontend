import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
//all of the fetcing or logic(add a product or delete a prodcut) we are gonna do it is written under the createapi object 
export const productsApi=createApi({
    //createapi allows you to setup a reducerPath (its a namespace) to identify when we wanna use it 

    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    //endpoints are basically we are gonna define all the queries we have 
    endpoints:(builder)=>({
        //this object will containt all the diff queries we want to have 
        getAllProducts:builder.query({
            //here the object will be the query and at the end we need to specify the path we need to fetch data from 

            query:()=> "products",
        }),
    }),

});

//very cool thing RTK query does is it create a hook for all of your end points 
export const {useGetAllProductsQuery}=productsApi;
//this is already pre made when you have the create api function  so we can use it in other file  