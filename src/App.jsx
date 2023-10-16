import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/sign-in' element= {<SignIn />} />
      <Route path='/sign-out' element= {<SignUp />} />
      <Route path='/about' element= {<Profile />} />
      <Route path='/profile' element= {<About />} />
    </Routes>
    </BrowserRouter>
  )
}
