import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, RightSideNavigation, LeftSideNavigation } from "@/components/blocks";

const MainLayout = () => {
  return (
    <>
      {/* =========== 헤더 =========== */}
      <Header />
      {/* =========== 헤더 =========== */}
      <div className="empty" />

      {/* =========== 컨텐츠 =========== */}
      <main>
        <LeftSideNavigation />
        <Outlet />
        <RightSideNavigation />
      </main>
      {/* =========== 컨텐츠 =========== */}

      {/* 사이드 네비게이션  - 오른쪽 */}
      {/* <RightSideNavigation /> */}
      {/* 사이드 네비게이션 - 오른쪽 */}

      {/* =========== 푸터 =========== */}
      <Footer />
      {/* =========== 푸터 =========== */}
    </>
  );
};

export default MainLayout;
