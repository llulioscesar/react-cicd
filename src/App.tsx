import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import { CreateTaskScreen, ListTaskScreen, UpdateTaskScreen } from './components/screens';

const router = createBrowserRouter([
  {
    path: '/create',
    element: <CreateTaskScreen />,
  },
  {
    path: '/task/:id',
    element: <UpdateTaskScreen />,
  },
  {
    path: '/',
    element: <ListTaskScreen />,
  },
]);


function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
