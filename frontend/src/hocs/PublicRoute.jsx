// import { useRefresh } from "../../../common/services/auth/useRefresh";
import { Navigate } from "react-router-dom";
import { ROUTE_KEYS } from "../constants";
// import { HocProps } from "../hocs.types";
import { useUser } from "../services/user/useUser";

export const PublicRoute = ({ children }) => {
  const user = useUser();

  return user ? <Navigate to={ROUTE_KEYS.HOME} /> : children;
};