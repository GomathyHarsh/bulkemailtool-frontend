import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../Context/UserContext";
import FileUpload from "../Components/FileUpload";

const PrivateRoutes = ({children,...rest}) => {
   const {user} = useContext(UserContext)
   if(!user){
  
    return <div>
        <FileUpload/>
    </div>
   }
   
return(
    user ? <Outlet/> :<Navigate to='/login' />
)
}
export default PrivateRoutes;