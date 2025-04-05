import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Analytics from '../pages/Analytics';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Analytics />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
