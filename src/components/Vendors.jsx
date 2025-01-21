import React from "react";
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
