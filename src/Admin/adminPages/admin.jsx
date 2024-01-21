// AdminPage.js
import React from 'react';
import { useSelector } from 'react-redux';
// import { selectUser } from './authSlice';
import { selectUser } from '../redux/slices/users/userSlice';

const AdminPage = () => {
  const user = useSelector(selectUser);

  // Check if the user is an admin
  if (user) {
    console.log(user)
    console.log(user.foundUser.firstName)

    return <div>Welcome to the Admin Page, {user.foundUser.firstName}</div>;
  } else {
    return <div>You do not have permission to access this page.</div>;
  }
};

export default AdminPage;
