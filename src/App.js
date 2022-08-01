import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './layout'
import '../src/pages/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import { HomePage, ArtistPage } from './pages'



const App = () => {

    return (
      <>
        <Routes>
          <Route path='/' element={<Layout />}>  
            <Route path='/' element={<HomePage/>}>  </Route>
            <Route path="/artists" element={<ArtistPage/>}> </Route>
            {/* <Route path="/JimSullivan" element={<JimSullivan/>}> </Route> */}
            </Route> 
        </Routes>
      
      
      </>             
    )
}

export default App
