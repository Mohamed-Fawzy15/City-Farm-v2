import "./App.css";
import HomePage from "./pages/Home/home";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import About from "./pages/About/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
