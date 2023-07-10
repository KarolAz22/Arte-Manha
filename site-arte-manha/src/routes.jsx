import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/homePage";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";

export default function AppRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/home-page", element: <HomePage /> },
        { path: "/fale-conosco", element: <ContactUs /> },
        { path: "/sobre-nos", element: <AboutUs /> },
      ])}
    />
  );
}
