import { lazy, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_KEYS } from "../constants";
import { PrivateRoute } from "../hocs/PrivateRoute";
import { PublicRoute } from "../hocs/PublicRoute";
import { useLogout } from "../services/auth/useLogout";

const Home = lazy(() => import('../pages/home'));
const Quiq = lazy(() => import('../pages/quiz'));
const Auth = lazy(() => import('../pages/auth'));

const MainLayout = () => {
  const logout = useLogout();

  return (
    <div>
      <header>
        <Link to={ROUTE_KEYS.HOME}>Home</Link>
        <Link to={ROUTE_KEYS.QUIZ}>Quiz</Link>
        <Link to={ROUTE_KEYS.AUTH}>Auth</Link>
        <button type="button" onClick={logout}>Logout</button>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export const MainRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTE_KEYS.HOME} element={<MainLayout />}>
          <Route path={ROUTE_KEYS.HOME} element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path={ROUTE_KEYS.QUIZ} element={<PrivateRoute><Quiq /></PrivateRoute>} />
          <Route path={ROUTE_KEYS.AUTH} element={<PublicRoute><Auth /></PublicRoute>} />
        </Route>
      </Routes>  
    </Suspense>  
  </BrowserRouter>
);