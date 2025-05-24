import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./Footer";
import toast from "react-hot-toast";

import Greetings from "./Greetings";
function Header(){

  const [showPassword, setShowPassword] = useState(false);

  const[signup, setsignup]=useState({user:'',email:'',password:''})
  
  const[login,setlogin]=useState({email:'',password:''})

 

  const[warning,setwarning]=useState(false);

  const[warningLogin,setLoginWarning]=useState(false);
  
  function handeluser(event) {
    setsignup({ ...signup, user: event.target.value });
  }

  function handelemail(event) {
    setsignup({ ...signup, email: event.target.value });
  }

  function handelpassword(event) {
    setsignup({ ...signup, password: event.target.value });
  }
  
  function checkemail(event)
  { 
      setlogin({...login,email:event.target.value});
  }


  function checkpassword(event){
    setlogin({...login,password:event.target.value});
  }

  function resetForm(formid)
  {
    const signupForm = document.getElementById('signupid');
    signupForm.reset();
    const loginForm = document.getElementById('loginid');
    loginForm.reset();
  }

  function handelWarning()
  {
    console.log("button cliked");
    setwarning(false)

    setLoginWarning(false)
  }

 async function handelSignup()
 {
    if((signup.user===""||signup.user.length <3 ||signup.email===""|| signup.password===""||signup.password.length <5))
    {
      console.log("set warning true ");
      setwarning(true)
      return;
    }
    setwarning(false)

    try{
   let api= await axios.post("http://localhost:8080/empty/signups",signup);

        if(api.data ==="Sucess")
        {
          toast.success('Successfull Signup!');

        }
        else{
          toast.error( api.data);
          
        }
    }
    catch( error){
      toast.error(error.message)
     
      
    }

  }
  async function hadelapi()
  {
    if((login.email===""|| login.password==="" || login.password.length <5))
      {
        console.log("set warnig as true ")
          setLoginWarning(true);
          return;
      }
      setLoginWarning(false);
    try{
      let responce= await axios.post("http://localhost:8080/empty/login",login);

      if(responce.data==="login Sucess")
      {
        toast.success('Successfull Login!');
      }
      else{
        toast.error(responce.data);
      }
    }
    catch(error){
      
      toast.error(error.message)
      
    }
  }


  function Password()
  {
      setShowPassword(!showPassword);
  }
 
 
    return(
        <div>
                   
          <div className="container pt-2">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
           <div className="container-fluid d-flex justify-content-start">
           <Link className="navbar-brand" to={'/'}>

              <img src="/logo192.png" alt="Logo"  style={{width:"60px", height:" 60px"}}/>
           </Link>
    </div>

    <div className="container-fluid d-flex justify-content-end">
      <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleSignup">
        Signup
      </button>
      <button type="button" className="btn btn-warning ms-2" data-bs-toggle="modal" data-bs-target="#exampleLogin">
        Login
      </button>
    </div>
  </nav>
</div>
     <div>
      
      

     
      <div  className="modal fade"  id="exampleSignup"   data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Signup
              </h1>
              <button  type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>resetForm('signupid')} aria-label="Close" ></button>
            </div>
            <div className="modal-body">
              <form id="signupid">

              <div className="mb-3">
                  <label htmlFor="user" className="col-form-label">
                    User
                  </label>
                  <input type="user"className="form-control" id="user"  onChange={event=>handeluser(event)} placeholder="User" maxLength={10}/>
                  {
                      warning &&(
                        <div>
                          <p className="text-danger mt-1"> <strong>*</strong>  required 3 characters</p>
                        </div>
                      )

                    }
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">
                    Email
                  </label>

                  <input type="email"className="form-control" id="email" onChange={event=>handelemail(event)}  placeholder="Email"/>
                  {
                    warning&&(
                      <div>
                        <p className="text-danger"><strong>*</strong> Email Requires</p>
                      </div>
                    )
                  }
            <div className="mb-3 position-relative">
            <p className="text-primary mt-2">strong password:
            5 characters, with alohabets </p>  
                  <label htmlFor="password" className="col-form-label">
                    Password
                  </label>
                  <input type={showPassword ? "text" : "password"} className="form-control pe-5" id="password" maxLength={5} onChange={event => handelpassword(event)} placeholder="Ex:Abc@1"/> 
                    {
                      warning &&(
                        <div>
                          <p className="text-danger"> <strong>*</strong> requird 5</p>
                        </div>
                      )
                    }
                  <span onClick={Password} className="position-absolute top-50 end-0 translate-middle-y me-3"style={{cursor: 'pointer', fontSize: '25px' }}> 
                    {showPassword ? '🙉' : '🙈'}

                  </span> 
                </div>                
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary " onClick={()=>resetForm('signupid')} data-bs-dismiss="modal">
                Cancel
              </button>
             
              {
              warning && (
                <div className="alert alert-danger shake slide-in">
                  
                <i className="bi bi-exclamation-octagon-fill blink  me-3 fs-4"></i>
                <strong>Warning: Please fill all fields!</strong>
                <button className="btn btn-cross" onClick={handelWarning}>✖</button>
              </div>
              )}
                     <button type="button" className="btn btn-success"  onClick={(e) => {handelSignup()}}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
            <div>
            
      <div>
      <div className="modal fade" id="exampleLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          Login
        </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>resetForm('loginid')} aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form id="loginid">
          <div className="mb-3">
            <label htmlFor="email" className="col-form-label">
              Email
            </label>
            <input type="email" className="form-control" onChange={event=>checkemail(event)} placeholder="Email" />
            {
              warningLogin&&(
                <div>
                <p className="text-danger"><strong>*</strong> Email Requires</p>
              </div>
              )
            }
          </div>
          <p className="text-primary">strong password:
            5 characters, with alphabets </p>
          <div className="mb-3">
            <label htmlFor="password" className="col-form-label">
              Password
              <span className="position-absolute end-0 top-45 translate-middle-y me-2" style={{ cursor: "pointer",fontSize: "25px" }}onClick={Password}> 
                {showPassword ? "🙉" : "🙈"} 
                   </span>
            </label>
            <input  type={showPassword ? "text" : "password"} className="form-control" maxLength={5} onChange={event=>checkpassword(event)} placeholder="Ex:Abc@1" />
            {
              warningLogin &&(
                <div>
                  <p className="text-danger"><strong>*</strong> Requires at least 5 characters</p>
                </div>
              )
            }
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={()=>resetForm('loginid')} data-bs-dismiss="modal">
          Cancel
        </button>
        
         {
         warningLogin &&(
          <div className="alert alert-danger shake slide-in">
          <i className="bi bi-exclamation-octagon-fill blink me-3 fs-4"></i>
          <strong>Warning: Please fill all fields!</strong>
          <button className="btn btn-cross" onClick={handelWarning}>✖</button>
        </div>
         )}
         <button type="button" className="btn btn-success " onClick={e=>hadelapi()}>
          Submit
        </button>
      </div>
    </div>
  </div>
</div>
      <div>
        <Greetings/>
      </div>

    </div>
    <Footer/>
      </div>
            </div>
     

    )
};
export default Header;