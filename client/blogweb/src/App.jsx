
import './App.css'
import {createBrowserRouter,RouterProvider,Route, Outlet} from "react-router-dom"
import Register from "./Pages/Register"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Single from "./Pages/Single"
import Write from './Pages/Write'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './style.scss'

const Layout =()=>{
  return ( 
<>
<Navbar/>
<Outlet/>
<Footer/>
</>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/login",
    element: <Login/>
  },
 

] );

function App() {
 
  return (
    <>
    <div className='app'>
      <div className='container'>
<RouterProvider router={router}/>
      </div>
 
   


    </div>
     
    </>
  )
}


export default App
