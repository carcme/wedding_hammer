import React from "react";
import { LanguageProvider } from "./LanguageContext";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "./components/Footer";

function App() {
  console.log("App");

  return (
    <>
      <LanguageProvider>
        <Navbar />

        <Outlet />

        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
