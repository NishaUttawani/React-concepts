import React, { useState, useEffect, Suspense } from "react";
import {
  Route,
  NavLink,
  Routes,
  Navigate,
  useNavigate
} from "react-router-dom";
import ChildButton from "../ChildButton";
import Contact from "../Contact";
import FocusInput from "../forwardRef/FocusInput";
import RenderPropComp from "../RenderPropComp";
import MyHttp from "../Http";
import ParentComp from "../ParentComp";
// import Hoc from "../Hoc";
import "./index.css";
import Login from "../Login";
import Profile from "../Profile";
import { useAuth } from "../auth";
import { RequireAuth } from "../RequireAuth";
const LazyHoc = React.lazy(() => import("../Hoc"));

export default function NavBar(props) {
  const auth = useAuth();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
    if (count === 5) {
      alert("I am redirecting");
      navigate("/redirect");
    }
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  useEffect(() => {
    // console.log(count);
    if (count === 10) {
      setCount(0);
      console.log(count);
    }
  }, [count]);
  return (
    <div className="layout-column justify-content-center align-items-center">
      <div
        className="layout-row justify-content-around align-items-center mt-20 links"
        data-testid="navigation-tabs"
      >
        <NavLink to="/">Home</NavLink>
        {!auth.user && <NavLink to="/login">Login</NavLink>}
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/hoc">HOC & ContextType</NavLink>
        <NavLink to="/myhttp">HTTP</NavLink>
        <NavLink to="/pure">Pure Component</NavLink>
        <NavLink to="/forwardRef">Forward Ref</NavLink>
        <NavLink to="/renderProp">Render Props</NavLink>
      </div>
      {auth.user && <button onClick={handleLogout}>Logout</button>}
      <div className="card w-80 ma-0">
        <section
          style={{ alignContent: "center" }}
          className="card-text"
          data-testid="tab-content"
        >
          {/* <div style={{ textAlign: "center", color: "red" }}>My container </div> */}
          <div>
            <ChildButton handleClick={handleClick}></ChildButton>
            <p>count is {count}</p>
          </div>
          <hr />
          <Routes>
            <Route path="/" element={<span>HOME PAGE</span>}></Route>
            <Route path="/about" element={<span>ABOUT PAGE</span>}></Route>
            <Route path="/news" element={<span>NEWS PAGE </span>}></Route>
            <Route path="/myhttp" element={<MyHttp />}></Route>
            <Route path="/pure" element={<ParentComp />}></Route>
            <Route path="/forwardref" element={<FocusInput />}></Route>
            <Route path="/renderprop" element={<RenderPropComp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <h3>Wrapped in Auth Wrapper</h3>
                  <Profile />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/hoc"
              element={
                <Suspense fallback={<div>...Loading</div>}>
                  <LazyHoc />
                </Suspense>
              }
            ></Route>
            <Route path="/contact" element={<Contact />}>
              <Route path="president" element={<span>President</span>}></Route>
              <Route path="minister" element={<span>Minister</span>}></Route>
            </Route>
            <Route path="/redirect" element={<Navigate to="/about" />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}
