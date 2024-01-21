import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <aside id="sidebar" className={isOpen ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <span className="material-icons-outlined">shopping_cart</span> STORE
        </div>
        <span className="material-icons-outlined" onClick={closeSidebar}>
          close
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/adminHome">
            <span className="material-icons-outlined">dashboard</span> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/products">
            <span className="material-icons-outlined">inventory_2</span>
            <span>Products</span>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <span className="material-icons-outlined">category</span>
            <span>Categories</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <span className="material-icons-outlined">groups</span>
            <span>Customers</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <span className="material-icons-outlined">fact_check</span>{" "}
            <span>Orders</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <span className="material-icons-outlined">poll</span> Reports
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" target="_blank">
            <span className="material-icons-outlined">settings</span> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
