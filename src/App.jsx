import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Layout,
  Login,
  Orders,
  Product,
  Products,
  Register,
} from "./pages";

import { ErrorElement } from "./components/others";

import { loader as homeLoader } from "./pages/Home";
import { loader as productLoader } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
        loader: homeLoader,
      },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:id",
        element: <Product />,
        loader: productLoader,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
