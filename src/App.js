import React from 'react'
import Data from './Data';
import store from "./store";
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from './appSlice';

function App() {




  return (
    <div>
        
        <Data/>
        
      
    </div>
  )
}

export default App;
