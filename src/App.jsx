import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";

import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Login,
  Orders,
  Product,
  Products,
  Register,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <Product /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
