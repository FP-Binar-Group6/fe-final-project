import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";
import Booking from "./pages/booking/Booking";
import History from "./pages/history/History";
import Navbar from "./components/navbar/Navbar";
import Notifikasi from "./pages/notifikasi/Notifikasi";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        
        <Route path='/' element={<Homepage/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/booking/checkout' element={<Booking/>} />
        <Route path='/booking/payment' element={<Booking/>} />
        <Route path='/booking/success' element={<Booking/>} />
        <Route path='/history' element={<History/>} />
        <Route path="/notifikasi" element={<Notifikasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
