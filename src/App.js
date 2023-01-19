import React from "react";
import NavBar from "./components/nav-bar";
import "h8k-components";
import "./App.css";
import { FormDemo } from "./components/MyClass";
import { UserConsumer, UserProvider } from "./components/userContext";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./components/auth";

const title = "Navigation Bar";

function App() {
  return (
    <AuthProvider>
      <div>
        <h8k-navbar header={title} />
        <UserProvider value="FinanceUser">
          <NavBar />
        </UserProvider>
        <h1>Form Demo (ref , callback ref)</h1>

        <UserConsumer>
          {(username) => {
            return <FormDemo greeting={`Good Evening ${username}`} />; //takes the default context value as there is no parent provider
          }}
        </UserConsumer>
        <hr />
        <PortalDemo />
        <hr />
        <ErrorBoundary>
          <h3>Error Boundary Demo</h3>
          <Hero heroName="Joker!" />
        </ErrorBoundary>

        {/* <Routes>
            <Route path="/" element={<span>HOME PAGE</span>}></Route>
            <Route path="/about" element={<span>ABOUT PAGE</span>}></Route>
            <Route path="/news" element={<span>NEWS PAGE </span>}></Route>
            <Route path="/contact" element={<Contact />}>
              <Route path="president" element={<span>President</span>}></Route>
              <Route path="minister" element={<span>Minister</span>}></Route>
            </Route>
          </Routes> */}
      </div>
    </AuthProvider>
  );
}

export default App;
