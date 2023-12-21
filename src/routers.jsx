import { createBrowserRouter } from "react-router-dom";
import RootHome from "./pages/RootHome";
import MenuList from "./pages/MenuList";
import About from "./pages/About";

export const router = createBrowserRouter([
       {
        path:"/",
        element: <RootHome/>,
       },
       {
        path: "/menu",
        element: <MenuList/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
])