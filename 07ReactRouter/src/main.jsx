import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About';
import Contact from './Components/ContactUs/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub from './Components/GitHub/GitHub.jsx'
// import GitHub, { githubInfoLoader } from './Components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:'home',
//         element: <Home/>
//       }, 
//       {
//         path:'about',
//         element: <About/>
//       },
//       {
//         path:'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<GitHub/>}/>

      {/* <Route 
      loader={githubInfoLoader} 
      path='github' 
      element={<GitHub/>}/> */}

      {/* <Route loader={({request})=>{
        fetch('https://api.github.com/users/Prasadkare77',
        {
          signal: request.signal 
        })
      }} path='github' element={<GitHub/>}/> */}

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
