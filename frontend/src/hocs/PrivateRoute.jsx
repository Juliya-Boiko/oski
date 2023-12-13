import { Navigate } from "react-router-dom";
import { useUser } from "../services/user/useUser";
import { ROUTE_KEYS } from "../constants";

export const PrivateRoute = ({ children }) => {
  const user = useUser();

  return !user ? <Navigate to={ROUTE_KEYS.AUTH} /> : children;
};