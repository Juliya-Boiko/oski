import { Dashboard } from "../../sections/dashboard/Dashboard";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainLayoutStyled, MainLayoutMain } from "./MainLayout.styled";
import { Header } from "../../sections/header/Header";

const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <Header />
      <Dashboard />
      <MainLayoutMain>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainLayoutMain>
    </MainLayoutStyled>
  );
};

export default MainLayout;