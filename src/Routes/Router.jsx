import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/Home";
import Profile from "@/Pages/Profile/Profile";
import AddListing from "@/Pages/AddListing/AddListing";

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element= {<Home/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/add-listing" element={<AddListing/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default Router
