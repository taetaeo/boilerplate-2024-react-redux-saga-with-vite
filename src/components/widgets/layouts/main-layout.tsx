import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components/blocks";

const MainLayout = () => {
  return (
    <>
      {/* =========== 헤더 =========== */}
      <Header />
      {/* =========== 헤더 =========== */}
      <div className="empty" />

      {/* =========== 컨텐츠 =========== */}
      <main>
        <Outlet />
      </main>
      {/* =========== 컨텐츠 =========== */}

      {/* =========== 푸터 =========== */}
      <Footer />
      {/* =========== 푸터 =========== */}
    </>
  );
};

export default MainLayout;
