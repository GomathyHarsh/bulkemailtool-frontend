import {useEffect,useState} from "react";
import axios from 'axios';


const useFindUser = () =>{
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(false);
    
   
    const getUser = async () =>{
        
       try{
        const response= await axios.get(`${process.env.REACT_APP_BASE_URL}/user`, {withCredentials:true});
            if(response.data.success){
                console.log('Response:',response.data);
                setUser(response.data.user);
                setLoading(false);
            }
          
       }catch(error){
        setLoading(false);
        console.log('Error:',error);
       }
    }

    useEffect(()=>{
        setLoading(true);
        // getUser();
       
    },[]);
   return [user,setUser,loading];
}

export default useFindUser;