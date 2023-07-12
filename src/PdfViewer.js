import React, { useState } from 'react'
import {Worker,Viewer} from "@react-pdf-viewer/core";
import {defaultLayoutPlugin} from "@react-pdf-viewer/default-layout";


function PdfViewer() {
    const [pdfFile,setPdfFile]=useState(null);
    const [viewPdf,setViewPdf]=useState(null);
    const newPlugin=defaultLayoutPlugin();

    const fileType=['application/pdf']
    const handleChange=(e)=>{
        let selectedFile=e.target.files[0];
        if (selectedFile){

            if(selectedFile && fileType.includes(selectedFile.type)){
                let reader=new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onload=(e)=>{
                    setPdfFile(e.target.result);
                }
            }
            else{
                setPdfFile(null);

            }
        }
        else{
            console.log("please select")
        }



    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(pdfFile!=null){
            setViewPdf(pdfFile)
        }
        else{
            setViewPdf(null);
        }
    }
  return (
    <div>
       
        <form onSubmit={handleSubmit}>
        <input type="file" className="h-200 w-200  bg-red-600" onChange={handleChange}/>
            
            <button type="submit" className='font-bold bg-red-600'>View pdf</button>
        </form>
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                {viewPdf && <div>
                <Viewer fileUrl={viewPdf} plugins={[newPlugin]}/>
                
                </div> }
                {!viewPdf && <div> No pdf</div>}
            </Worker>


        </div>
      
    </div>
  )
}

export default PdfViewer;