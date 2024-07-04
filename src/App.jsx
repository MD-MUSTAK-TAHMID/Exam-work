import React from 'react'
import Home from './components/Page/Home'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Rootlayout from './components/Rootlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App