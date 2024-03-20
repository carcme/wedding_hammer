import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

function App() {
  console.log("App");
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default App;
