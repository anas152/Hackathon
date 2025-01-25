import React from 'react'
import {Routes, Route, Router, BrowserRouter} from 'react-router-dom'
import LandingPage from './component/LandingPage';
import Loan from './component/loan';
import UserInfo from './component/Userinfo';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Loan" element={<Loan/>} />
      <Route path="/UserInfo" element={<UserInfo/>} />
    </Routes>
    </BrowserRouter>
  )
}
