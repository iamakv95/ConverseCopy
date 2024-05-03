import React from "react";
import {
  Highlights,
  Hero,
  ShopByStyle,
  OffCourtIcon,
  SummerLook,
  ForeverClassic,
  OurCommunity,
  Newsletter,
} from "../sections";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ShopByStyle />
      <OffCourtIcon />
      <SummerLook />
      <ForeverClassic />
      <OurCommunity />
      <Newsletter />
      <Highlights />
    </div>
  );
};

export default Homepage;
