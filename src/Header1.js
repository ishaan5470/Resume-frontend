import React from 'react';
import "./Header.css";
import { useState,useEffect } from 'react';
import {saveAs} from "file-saver";

function Header1() {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch("http://localhost:2000/getAllUser",{
        method:"GET",
       })
       
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data,"userData")
        setData(data.data)
       });
    },[]);

  return (
    <>
    <div className='p-7 flex flex-row items-center justify-between'>
        <div>
      {data.map(i=>{
            return(
                <div className='py-100 text-3xl'>
                    {i.firstName} 
                    </div>
            )
           })}
           



        
        <div className='text-xl mt-5'>
      {/*  {data.map(i=>{
            return(
                <div className='skills'>
                    {i.skills} 
                    </div>
            )
           })} */}
           Expertise
            

        </div>
        </div>
        
        <div className='flex flex-col items-end'>
          <div className='text-sm'>
            Link of your profile
          </div>
          <div>
                {data.map(i=>{
            return(
                <div className='text-sm'>
                    {i.emailid} 
                    </div>
            )
           })} 
            
          </div>
          <div>
           {data.map(i=>{
            return(
                <div className='text-sm'>
                    {i.location} 
                    </div>
            )
           })} 
            
          </div>
          <div>
               {data.map(i=>{
            return(
                <div className='text-sm'>
                    {i.phoneNumber} 
                    </div>
            )
           })} 

          </div>

        </div>
        
       
      
    </div>
    <div className='w-100 bg-blue-300 h-0.5'>
          
      
      </div>
    
    
    </>

   
  )
}

export default Header1;
