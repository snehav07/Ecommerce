import React, { useState } from 'react'
import { Form ,FloatingLabel} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../assets/log.webp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';



function Auth({insideRegister}) {
  const navigate = useNavigate()
  const [userinputs,setUserInputs] = useState({
    username:"", email:"", password:""
  })
  console.log(userinputs);

  const handleRegister = async (e)=>{
    e.preventDefault()
    if(userinputs.username && userinputs.email && userinputs.password){
      // api call
      try{
        const result = await registerAPI(userinputs)
        console.log(result);
        if(result.status==200){
          toast.success(`Welcome ${result.data.username}...Please Login to explore our Products!!!`)
          setUserInputs({username:"",email:"",password:""})
          setTimeout(()=>{
             navigate('/login')
          },2000);
        }else{
          toast.error(result.response.data)
          setTimeout(()=>{
            setUserInputs({username:"",email:"",password:""})
          },2000)
        }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.warning("Please fill the form completely!!!")
    }
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    if(userinputs.email && userinputs.password){
      // api call
      try{
        const result = await loginAPI(userinputs)
        if(result.status==200){
          // store existingUser and token
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token",result.data.token)
          toast.success(`Welcome ${result.data.existingUser.username}...`)
          setUserInputs({username:"",email:"",password:""})
          setTimeout(()=>{
             navigate('/home')
          },2000);
        }else{
          toast.error(result.response.data)    
      } 
    }
    catch(err){
      console.log(err);
    }
  }else{
      toast.warning("Please fill the form completely!!!")
    } 
  }


  return (
    <div style={{ width: '100%', height: '100vh',background:'lightgreen' }} className='d-flex justify-content-center align-items-center'>
    <div className="container w-75">
      <Link to={'/'} style={{ textDecoration: 'none' }} className='fw-bolder text-danger'> <i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
      <div className="card shadow p-5">
        <div className="row">
          <div className="col-lg-6">
            <img className='w-100' src={LoginImg} alt="Auth" />
          </div>
          <div className="col-lg-6">
            <h1 className="fw-bolder mt-4"><i className="fa-solid fa-cart-shopping text-danger"></i> E-Shop</h1>
            <h5 className="fw-bolder">
              Sign {insideRegister ? 'up' : 'in'} to your Account
            </h5>
            <Form >
              {
                insideRegister &&
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control value={userinputs.username} onChange={e=>setUserInputs({...userinputs,username:e.target.value})} type="text" placeholder="Username" />
                </FloatingLabel>

              }
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control value={userinputs.email} onChange={e=>setUserInputs({...userinputs,email:e.target.value})}  type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel value={userinputs.password} onChange={e=>setUserInputs({...userinputs,password:e.target.value})} controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              {
                insideRegister ?
                  <div className='mt-3'>
                    <button onClick={handleRegister}  className='btn btn-primary'>Register</button>
                    <p>Already have an Account? Click here to <Link className='text-info' to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className='mt-3'>
                    <button onClick={handleLogin} className='btn btn-primary'>Login</button>
                    <p>New User? Click here to <Link className='text-info' to={'/register'}>Register</Link></p>
                  </div>
              }
            </Form>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={2000} />
  </div>
  )
}

export default Auth