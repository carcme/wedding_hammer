import React from "react";
import image from "@/assets/image/barn_garden.webp";
import Hero from "../components/Hero";
import Vendors from "../components/Vendors";
import Accordion from "../components/Accordion";

const Temp = () => {
  const title = "";
  const subTitle = "";

  return (
    <>
      <Hero
        image="https://images.unsplash.com/photo-1524148896000-11a448dd0560?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={title}
        subTitle={subTitle}
      />
      <Vendors />
      <Accordion />
    </>
  );
};

export default Temp;
