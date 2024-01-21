import { createBrowserRouter } from "react-router-dom";
import RootHome from "./pages/RootHome";
import MenuList from "./pages/MenuList";
import About from "./pages/About";
import BookTable from "./pages/BookTable";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import RootLayout from "./Admin/adminPages/RootLayout";
// import Home from "./Admin/adminPages/Home";
import AdminHome from "./Admin/adminPages/Home";
import { mealsLoaderData } from "./pages/MenuList";
import Login from "./pages/login";
import CartPage from "./components/NavBar/cartPage";

export const router = createBrowserRouter([
  {
    // path:"login",
    index:true,
    element: <Login />,
   },
  {
    path: "/",
    element: <RootHome />,
    children: [
      {
        // index: true,
        path:"/home",
        element: <Home />,
        // loader: mealsLoaderData
      },
      {
        path: "/menu",
        element: <MenuList />,
        loader: mealsLoaderData
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book",
        element: <BookTable />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      // {
      //   path: "/admin",
      //   element: <Admin />,
      // },
    ],
  },
  {
    path:"login",
    element: <Login />,
   },
]);
