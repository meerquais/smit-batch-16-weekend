import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children})=>{
  const {user} = useSelector((s) => s.auth);

  if(!user) return <Navigate to="/login" />


  return children;
}

export default ProtectedRoute;