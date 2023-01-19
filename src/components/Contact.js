import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <span>CONTACT PAGE</span>
      <ul>
        <li>
          <Link to="president"> President </Link>
        </li>
        <li>
          <Link to="/minister"> Minister </Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
