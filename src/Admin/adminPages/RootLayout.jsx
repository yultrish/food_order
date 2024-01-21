import React from "react";
// import { Provider, useSelector } from "react-redux";
// import Header from "../components/Header";
// import Sidebar from "../components/sideBar";
import Sidebar from "../adminComponents/sideBar.jsx";
import { Outlet } from "react-router-dom";
// import { selectIsAuthenticated } from "../redux/slices/users/userSlice.jsx";
// import Home from "./Home.jsx";
import AdminHome from "./Home.jsx";
// import store from "../redux/store/store"; // Update the path accordingly
// import Log from "./log.jsx";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { selectUser } from "../redux/slices/users/userSlice.jsx";

const RootLayout = () => {
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  // console.log(isAuthenticated)
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  // const dispatch = useDispatch();

  // const user = useSelector(selectUser);
  // const token = user.token
  // console.log("token", token)
  // console.log(user);
  // if (user) {
  //   console.log(user);
  //   console.log(user.foundUser.firstName);
  //   console.log(user.token);
  // }
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("auth");
  //   console.log(storedToken);
  //   if (storedToken) {
  //     dispatch(setAuthentication(true));
  //   }
  // }, [dispatch]);

  return (
    <>
      {/* <Provider store={store}> */}
      <div>
        {/* {isAuthenticated ? ( */}
        <div>
          {/* <p>Welcome {user.foundUser.fullName}!</p> */}
          <div className="grid-container">
            {/* <Header /> */}
            <Sidebar />
            <main className="main-container">
              <Outlet />
            </main>
          </div>
        </div>
        {/* ) : (
          <Log /> */}
        {/* )} */}
      </div>
      {/* </Provider> */}
    </>
  );
};

export default RootLayout;
