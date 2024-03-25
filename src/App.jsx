import React from "react";
import { LanguageProvider } from "./LanguageContext";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

function App() {
  console.log("App");

  return (
    <>
      <LanguageProvider>
        <Navbar />

        <Outlet />
      </LanguageProvider>
    </>
  );
}

export default App;
