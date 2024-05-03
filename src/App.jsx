import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {Homepage} from "./pages";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Homepage />}/>
    </Route>
  )
  );

  return <RouterProvider router={router} />;
};

export default App;
