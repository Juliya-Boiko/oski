import { ROUTE_KEYS } from "../constants";
import { useUser } from "../services/user/useUser";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const user = useUser();

  return user ? <Navigate to={ROUTE_KEYS.HOME} /> : children;
};