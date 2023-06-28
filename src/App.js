
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";
import Booking from "./pages/booking/Booking";
import History from "./pages/history/History";
import Navbar from "./components/navbar/Navbar";
import Notifikasi from "./pages/notifikasi/Notifikasi";
import Profile from "./pages/profile/Profile";

import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";

function App() {

  // const Layout = () => {
  //   return (
  //     <>
  //     <Navbar/>
  //     <Outlet/>
  //     </>
  //   )
  // }

  // const router = createBrowserRouter([
  //   {
  //     path : '/',
  //     element : <Layout/>,
  //     children : [
  //       {
  //         path : '/',
  //         element : <Homepage/>
  //       },
  //       {
  //         path : '/search',
  //         element : <Search/>
  //       },
  //       {
  //         path : '/booking',
  //         element : <Booking/>
  //       },
  //       {
  //         path : '/booking/checkout',
  //         element : <Booking/>
  //       },
  //       {
  //         path : '/booking/payment',
  //         element : <Booking/>
  //       },
  //       {
  //         path : '/booking/success',
  //         element : <Booking/>
  //       },
  //       {
  //         path : '/history',
  //         element : <History/>
  //       },
  //       {
  //         path : '/notifikasi',
  //         element : <Notifikasi/>
  //       },
  //       {
  //         path : '/profile',
  //         element : <Profile/>
  //       },
  //     ],
  //   },
  //   {
  //     path : '/login',
  //     element : <Login/>
  //   },
  //   {
  //     path : '/register',
  //     element : <Register/>
  //   },
  // ]
  // )

  return (
    // <div>
    //   <RouterProvider router={router}/>
    // </div>


  // return (
  //   <BrowserRouter>
  //     <Navbar />
  //     <Routes>
  //       <Route path='/login' element={<Login/>} />
  //       <Route path='/register' element={<Register/>} />
  //       <Route path='/' element={<Homepage/>} />
  //       <Route path='/search' element={<Search/>} />
  //       <Route path='/booking' element={<Booking/>} />
  //       <Route path='/booking/checkout' element={<Booking/>} />
  //       <Route path='/booking/payment' element={<Booking/>} />
  //       <Route path='/booking/success' element={<Booking/>} />
  //       <Route path='/history' element={<History/>} />
  //       <Route path="/notifikasi" element={<Notifikasi />} />
  //     </Routes>
  //   </BrowserRouter>

    <Provider store={store}>
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
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </Provider>

  );
}

export default App;