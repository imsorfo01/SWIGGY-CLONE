import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import "./index.css"
import Header  from './Header';
import Body from './Body';
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
// import About from './About';
import Error from './Error';
// import Contact from './Contact';
// import Resdetail from './Resdetail';
import Fakepage from './Fakepage';
import { lazy } from 'react';
const Resdetail = lazy(()=>import("./Resdetail"))
const Contact = lazy(()=>import("./Contact"))
const About = lazy(()=>import("./About"));
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
// const Cart = lazy (()=>import("./Cart"))
import Cart from './Cart';




function App() {
  
  return (
    <>
       <Provider store={appStore}>
      <Header/>
      <Outlet/>
      </Provider>
      
    </>
  )
}

const router = createBrowserRouter([
  {
    // now we are going to create different child component of App component and for this we are going to add another key whose name is children which will contain diffrent child component along with their path.
    path: "/",
    element: <App/>,
    children: [
      
      {
        path: "/",
        element: <Body/>
      },
      // {
      //   path: "/home",
      //   element: <Suspense fallback={<Fakepage/>}><Home/></Suspense>
      // },
      {
        path: "/contact",
        element: <Suspense fallback={<Fakepage/>}><Contact/></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<Fakepage/>}><About/></Suspense>
      },
      {
        path: "/restaurant/:resid",
        element: <Suspense fallback={<Fakepage/>}><Resdetail/></Suspense>,
         errorElement: <Error />
      },
      // {
      //   path: "/restaurant/:resid",
      //   element: <Resdetail/>,
      //    errorElement: <Error />
      // }
      {
        path: "/cart",
        element: <Cart/>,
         errorElement: <Error />
      }
     ],

    // for showing error we can use both the types
    // ErrorBoundary: Error,
    errorElement: <Error />
    
  },

  // in this way we can connect our different element to a definite path 
  // {
  //   path: "/about",
  //   element: <About/>,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>
  // }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
