import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/tailwind.css';
import Main from './pages/Main.jsx';
import Store from './pages/Store.jsx';
import PostPage from './pages/PostPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  { path: '/', element: <Main/> },
  { path: '/shop', element: <Store/> },
  { path: '/post/:id', element: <PostPage/> },
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);