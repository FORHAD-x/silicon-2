import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './LayOut/Layout'
import Home from './Pages/Home'

function App() {


  const myRoute =createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}/>
      <Route index element={<Home/>} />
    </Route>
  ))
  
  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
