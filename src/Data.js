import React, { useEffect, useState } from 'react';
import { useGetAllProductsQuery } from './appSlice';
import axios from 'axios';

import PdfViewer from './PdfViewer';
import { BrowserRouter ,Route, useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resume1 from './Resume1';
import Resume2 from './Resume2';




function Data() {


   

  
   
  
  return (
   <BrowserRouter>
   <Route exact path="/resume1">
    <h1>
        <Resume1/>
    </h1>

        
        </Route>
        <Route exact path="/resume2">
            <h1>
                <Resume2/>

            </h1>

        </Route>
        
        
        </BrowserRouter>
    
 
  )
}

export default Data
