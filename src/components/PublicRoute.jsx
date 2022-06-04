import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  children,
  restricted = false
}) => {
  const loggedIn = useSelector(state => state.isLoggedIn);
  const willRedirected = loggedIn && restricted;
      if(willRedirected){return <Navigate to="/" />}
      else return children;

};
