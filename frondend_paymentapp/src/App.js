import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pay from './Component/Payment/Pay';
import Show from './Component/Payment/Show';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pay />}/>
      <Route path='/ShowPay' element={<Show/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App