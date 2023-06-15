import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Search from './pages/search/Search'
import Booking from './pages/booking/Booking'
import History from './pages/history/History'
import Navbar from './components/navbar/Navbar';

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
        <Route path='/history' element={<History/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
