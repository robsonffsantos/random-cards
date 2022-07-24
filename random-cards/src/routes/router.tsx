import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Results from "../pages/Results"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<Home/>}/>
        <Route path='/results' element={<Results/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router