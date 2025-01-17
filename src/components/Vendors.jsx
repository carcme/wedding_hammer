import React from "react";
import vendorsData from "../data/vendorsData";
import { getLanguage } from "../LanguageContext";
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa6";
import ClickReveal from "./ClickReveal";
import ProfileCard from "./ProfileCard";
import VendorsSection from "./VendorsSection";

const Vendors = ({ sections }) => {
  return (
    <>
      <div>
        <VendorsSection sections={sections} />
      </div>
    </>
  );
};

export default Vendors;
