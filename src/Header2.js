import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Header2() {
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
    <div className='p-4'>
        <div className='flex justify-center'>
            <div className='text-xl font-bold'>
             
  {data.map(i=>{
            return(
                <div className='skills'>
                    {i.firstName} 
                    </div>
            )
           })} 
            
            </div>
            
            
        </div>
        <div className='bg-blue-500 h-1 w-90 mt-3'>

        </div>
        <div className='flex justify-evenly items-center mt-3'>
            <div className='font-semibold text-lg'>
                Expertise
            </div>
            <div className='text-xs'>
                   {data.map(i=>{
            return(
                <div className='skills'>
                    {i.location} 
                    </div>
            )
           })}
            </div>
            <div className='text-xs'>
            {data.map(i=>{
            return(
                <div className='skills'>
                    {i.emailId} 
                    </div>
            )
           })}
            </div>
            <div className='text-xs'>
            {data.map(i=>{
            return(
                <div className='skills'>
                    {i.phoneNumber} 
                    </div>
            )
           })}
            </div>
            <div className='text-xs'>
            {data.map(i=>{
            return(
                <div className='skills'>
                    {i.linkedin} 
                    </div>
            )
           })}
            </div>
        </div>
        <div>
        <div className=' ml-20 left-4  p-7' >
            <div className='flex items-center'>

                <div className='font-semibold text-lg'>
                Impact|Create
                </div>
                
                <div className='bg-blue-500 h-0.5 w-screen ml-3 p'>
                    

                </div>
                </div>
                <div className='mt-5 text-sm'>
                {data.map(i=>{
            return(
                <div className='skills'>
                    {i.description} 
                    </div>
            )
           })}

                </div>
                
                

            </div>
            
            </div>
            <div>
        <div className=' ml-20 left-4  p-7' >
            <div className='flex items-center'>

                <div className='font-semibold text-lg'>
                Experience
                </div>
                
                <div className='bg-blue-500 h-0.5 w-screen ml-3 p'>
                    

                </div>
                </div>
                <div className='mt-5 text-sm'>
                  {data[0].experience[0].company}| {data[0].experience[0].duration} 

                </div>
                <div className='flex items-center ml-5 mt-4'>
                <div> 
                    .
                </div>
                <div className='text-sm'>
                {data[0].experience[0].details}
                    

                </div>
                </div>
                
                

            </div>
            
            </div>

            <div>
        <div className=' ml-20 left-4  p-7' >
            <div className='flex items-center'>

                <div className='font-semibold text-lg'>
              Projects
                </div>
                
                <div className='bg-blue-500 h-0.5 w-screen ml-3 p'>
                    

                </div>
                </div>
                <div className='mt-5 text-sm'>
                {data[0].projects[0].name} | {data[0].projects[0].role} | {data[0].projects[0].time}

                </div>
                <div className='flex items-center ml-5 mt-4'>
                <div> 
                    .
                </div>
                <div className='text-sm'>
                Conducted user resrach and anayzed data to identify design opportunities and inform design desicion/
                    

                </div>
                </div>
                
                

            </div>
            
            </div>

            <div>
        <div className=' ml-20 left-4  p-7' >
            <div className='flex items-center'>

                <div className='font-semibold text-lg'>
             Education
                </div>
                
                <div className='bg-blue-500 h-0.5 w-screen ml-3 p'>
                    

                </div>
                </div>
                <div className='mt-5 text-sm'>
                {data[0].educationalDetails[0].institute} |  {data[0].educationalDetails[0].course} | Percentage: {data[0].educationalDetails[0].percentage} | {data[0].educationalDetails[0].period} 

                </div>
                <div className='flex items-center ml-5 mt-4'>
                <div> 
                    .
                </div>
                <div className='text-sm'>
                Conducted user resrach and anayzed data to identify design opportunities and inform design desicion/
                    

                </div>
                </div>
                
                

            </div>
            
            </div>

            <div>
        <div className=' ml-20 left-4  p-7' >
            <div className='flex items-center'>

                <div className='font-semibold text-lg'>
              Skills
                </div>
                
                <div className='bg-blue-500 h-0.5 w-screen ml-3 p'>
                    

                </div>
                </div>
                <div className='flex flex-row  mt-5'>
          <p className='rounded-xl h-7 bg-gray-200 justify-items-center items-center px-2 mr-10'>  {data.map(i=>{
            return(
                <div className='skills'>
                    {i.skills} 
                    </div>
            )
           })}</p>
           

          </div> 
               
                
                

            </div>
            
            </div>
            <div>
        <div className=' ml-20 left-4  p-7' >
            <div className='flex items-center'>

                <div className='font-semibold text-lg'>
              Tools 
                </div> 
                <div>
                    -
                </div>
                <div className='font-semibold text-lg'> Used</div>
                
                <div className='bg-blue-500 h-0.5 w-screen ml-3 p'>
                    

                </div>
                </div>
                <div className='flex flex-row  mt-5'>
          <p className='rounded-xl h-7 bg-gray-200 justify-items-center items-center px-2 mr-10'>Sketch</p>
            <p className='rounded-xl h-7 bg-gray-200 justify-items-center items-center px-2 mr-10'>Sketch</p>

          </div> 
               
                
                

            </div>
            
            </div>
                    
                
        </div>
      
 
  )
}

export default Header2
