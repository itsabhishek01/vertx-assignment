import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Analytics from '../pages/Analytics';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/analytics" replace />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
