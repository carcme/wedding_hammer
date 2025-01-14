import React from "react";
import image from "@/assets/image/barn_garden.webp";

import WhyUs from "../components/WhyUs";
import Hero from "../components/Hero";
import CardOverImage from "../components/CardOverImage";
import Test from "../components/test";
import Checkers from "../components/Checkers";
import Subscribe from "../components/Forms/SubscribeComponent";

const Temp = () => {
  const title = "A Gathering Together";
  const subTitle = "Your events venue just 30mins from Schonefeld airport";

  return (
    <>
      <Hero image={image} title={title} subTitle={subTitle} />
      <Checkers />
      <WhyUs />
      <CardOverImage />
      <Subscribe />
    </>
  );
};

export default Temp;
