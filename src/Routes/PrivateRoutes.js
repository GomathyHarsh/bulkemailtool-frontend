import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext";

const PrivateRoutes = ({children,...rest}) => {
   const {user} = useContext(UserContext)
   if(!user){
  
    return <div>Welcome To Bulk Email Tool</div>
   }
return(
    user ? <Outlet/> :<Navigate to='/login' />
)
}
export default PrivateRoutes;