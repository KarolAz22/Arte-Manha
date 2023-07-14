import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";

export default function AppRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <HomePage /> },
        { path: "/home-page", element: <HomePage /> },
        { path: "/fale-conosco", element: <ContactUs /> },
        { path: "/sobre-nos", element: <AboutUs /> },
        { path: "/produto/*", element: <ProductDetails /> },
      ])}
    />
  );
}
