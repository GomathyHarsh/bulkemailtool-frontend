import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () =>{
    
    const [userDetails,setUserDetails]= useState({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
        role: 1
    })
    const navigate = useNavigate();
    
    const handleForm = value =>{ 
        return setUserDetails(cred =>{
            return {...cred,...value}
        })
    }

    

    const handleRegisteration = async (event) =>{
     try{
      event.preventDefault(); // to prevant data and state,to carry the event- entire function execution
     // console.log('Logging in');
      const response= await axios.post(`${process.env.REACT_APP_BASE_URL}/register`,userDetails);
      if(response){
        navigate('/login');
      }
      
     }catch(error){
      console.log('error:',error);
     }
    }
    return(
        <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" >
                  <div className="card-body p-5">
                    <h2 className=" text-center mb-5">Create your free account here</h2>
      
                    <form onSubmit={handleRegisteration}>
      
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" value={userDetails.name} className="form-control form-control-lg"
                        onChange={(e) => handleForm({name: e.target.value})} />
                        <label className="form-label" for="form3Example1cg">Your Name</label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="email" id="form3Example3cg" value={userDetails.email}  className="form-control form-control-lg"
                        onChange={(e) => handleForm({email: e.target.value})} />
                        <label className="form-label" for="form3Example3cg">Your Email</label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="mobileNumber" id="form3Example4cg" value={userDetails.mobileNumber} className="form-control form-control-lg" 
                        onChange={(e) => handleForm({mobileNumber: e.target.value})}/>
                        <label className="form-label" for="form3Example4cg">Phone No</label>
                      </div>
      
                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example4cdg" value={userDetails.password} className="form-control form-control-lg" 
                        onChange={(e) => handleForm({password:e.target.value})}/>
                        <label className="form-label" for="form3Example4cdg">Password</label>
                      </div>
      
                     
      
                      <div className="d-flex justify-content-center">
                        <button type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>
      
                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                          className="fw-bold text-body"><u>Login here</u></a></p>
      
                    </form>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Register;
