import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Body1() {
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
    <div>
    
      <div className='p-8 ml-5'>

      
        <div className='font-semibold text-lg'>
          Impact | Create
        </div>
        <div>
            {data.map(i=>{
            return(
                <div className='mt-5'>
                    {i.description} 
                    </div>
            )
           })} 




        </div>
        <div className='bg-blue-300 w-1 h-screen absolute left-20 mt-12'>
        
        </div>
        <div className='p-4'>
       

        <div className='flex justify-evenly mt-10 text-left' >
          <div className='bg-blue-500 h-5 w-5 rounded-full absolute left-16 ml-2'>




          </div>
          <div className='font-semibold text-lg ml-5'>
            Experience
          </div>
          <div className='justify-items-center text-sm'>
       JP Morgan -Full Stack
          
          
            
           <div className='text-xs'>
          Jan 2023-Present

           </div>

          </div>
          
           <div className='flex items-center justify-center'>
            <div>
              .
            </div>
            <div className='w-22 text-sm'>
            Conducted user reseac and anlyzed dat to indentify design opportunity and inforn design
            </div>
            
           </div>

          



        </div>


        <div className='flex justify-evenly mt-10 items-center mr-10' >
          <div className='font-semibold text-lg'>
            Projects
          </div>
          <div className='bg-blue-500 h-5 w-5 rounded-full absolute left-16 ml-2'>




          </div>
          <div className='justify-items-center  text-sm '>
           {/* {data[0]?.projects[0].role}*/} abc
           <div>
           {/* {data[0]?.projects[0].time}*/} abc
           </div>

          </div>
         <div className='flex'>
            <div>
              .
            </div>
            <div className='w-22 text-sm'>
              Conducted user reseac and anlyzed dat to indentify design opportunity and inforn design 
            </div>
            
           </div>

          



        </div>











        <div className='flex justify-evenly mt-10 items-center' >
          <div className='font-semibold text-lg'>
            Education
          </div>
          <div className='bg-blue-500 h-5 w-5 rounded-full absolute left-16 ml-2'>




          </div>
         
          <div className='justify-items-center  text-sm mr-6'>
           {/* {data[0]?.projects[0].role}*/} IIT delhi 
           <div>
           {/* {data[0]?.projects[0].time}*/} 88%
           </div>
  
           

          </div>
         <div className='flex items-center'>
            <div>
              .
            </div>
            <div className='w-22 text-sm'>
              {/*  {data.map(i=>{
            return(
                <div className='skills'>
                    {i.EducationDescription} 
                    </div>
            )
           })} */}
              Conducted user reseac and anlyzed dat to indentify design opportunity and inforn design 
            </div>
            
           </div>

          



        </div>


        <div className='flex justify-evenly mt-10 items-center mr-10' >
          <div className='font-semibold text-lg'>
            Skills and Tools 
          </div>
          <div className='bg-blue-500 h-5 w-5 rounded-full absolute left-16 ml-2'>




          </div>
          <div className='justify-items-center mr-13'>
              {/*  {data.map(i=>{
            return(
                <div className='skills'>
                    {i.project} 
                    </div>
            )
           })} */} 
           <div className='mr-10'>
           Skills

           </div>

          </div>
          <div className='flex flex-row justify-end mr-25'>
          <p className='rounded-xl h-7 bg-gray-200 justify-items-center items-center px-2 mr-10'>Sketch</p>
            <p className='rounded-xl h-7 bg-gray-200 justify-items-center items-center px-2 mr-10'>Sketch</p>

          </div> 
          



        </div>








        {/*<div className='flex flex-row justify-end mr-25'>
          <p className='rounded-xl h-7 bg-gray-200 justify-items-center items-center px-2'>Sketch</p>
            <p className='rounded-xl h-7 bg-gray-200 justify-items-center items-center px-2'>Sketch</p>

          </div> */}

        <div className='flex justify-evenly mt-10 items-center ml-5' >
          <div className='font-semibold text-lg ml-5'>
            Achievements
          </div>
          <div className='bg-blue-500 h-5 w-5 rounded-full absolute left-16 ml-2'>




          </div>
          <div className='justify-items-center'>
         
           <div className='text-sm'>
            Jan 2023-Present Delhi,India

           </div>

          </div>
         <div className='flex'>
            <div>
              .
            </div>
            <div className='w-22 text-sm'>
            
              Conducted user reseac and anlyzed dat to indentify design opportunity and inforn design 
            </div>
            
           </div>

          



        </div>














        
        </div>
       

      
    </div>
   
    </div>
  )
}

export default Body1
