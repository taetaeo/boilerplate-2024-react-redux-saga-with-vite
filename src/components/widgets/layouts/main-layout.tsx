import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/ui/blocks";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
