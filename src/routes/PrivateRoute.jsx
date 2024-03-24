import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = sessionStorage.getItem("jwt_token");

  if (token) {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const tokenExpirationTime = decodedToken.exp * 1000;
    const currentTime = Date.now();
    if (tokenExpirationTime > currentTime) {
      return children;
    }
  }

  return <Navigate to={"/login"} />;
}

export default PrivateRoute;
