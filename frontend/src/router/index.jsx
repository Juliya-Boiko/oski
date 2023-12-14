import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_KEYS } from "../constants";
import { PrivateRoute } from "../hocs/PrivateRoute";
import { PublicRoute } from "../hocs/PublicRoute";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import { Loader } from "../components/loaders/Loader";

const Home = lazy(() => import('../pages/home'));
const Quiz = lazy(() => import('../pages/quiz'));
const Auth = lazy(() => import('../pages/auth'));
const Score = lazy(() => import('../pages/score'));

export const MainRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTE_KEYS.HOME} element={<MainLayout />}>
          <Route path={ROUTE_KEYS.HOME} element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path={ROUTE_KEYS.QUIZ} element={<PrivateRoute><Quiz /></PrivateRoute>} />
          <Route path={ROUTE_KEYS.SCORE} element={<PrivateRoute><Score /></PrivateRoute>} />
        </Route>
        <Route path={ROUTE_KEYS.AUTH} element={<PublicRoute><Auth /></PublicRoute>} />
      </Routes>  
    </Suspense>  
  </BrowserRouter>
);