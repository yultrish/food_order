import React from "react";
// import Cards from "../components/cards";
import Cards from "../adminComponents/cards";
// import { useSelector } from "react-redux";
// import { selectUser } from './authSlice';
// import { selectUser } from "../redux/slices/users/userSlice";

const AdminHome = () => {
  // const user = useSelector(selectUser);
  // console.log(user);
  // if (user) {
  //   console.log(user);
  //   console.log(user.foundUser.firstName);

    return (
      <>
        <div>Welcome to the Admin Page, {user.foundUser.firstName}</div>
        <Cards />
      </>
    );
  // } else {
  //   return <div>You do not have permission to access this page.</div>;
  // }
  // return (
  //   <>

  //   </>
  // )
};

export default AdminHome;
