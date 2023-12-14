import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../sections/header/Header";
import { Dashboard } from "../../sections/dashboard/Dashboard";
import { MainLayoutStyled, MainLayoutMain } from "./MainLayout.styled";

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