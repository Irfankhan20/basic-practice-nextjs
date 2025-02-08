import Footer from "@/components/Shared/Footer";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-[68vh]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
