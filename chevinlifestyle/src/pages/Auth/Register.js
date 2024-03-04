import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-toastify'
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")

    const handleSubmit=(e)=>{
       e.preventDefault()
       console.log(name,email,password,phone,address);
       toast.success("Registered successfully")
    };
  return (
   <Layout title={"Register-Chevin lifestyle"}>
    <div className='register'>
    <h1 >Register page</h1>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">
      Name
    </label>
    <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      placeholder='enter your name'
      required
      />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">
      Email
    </label>
    <input
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      placeholder='enter your email'
      required
      />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      className="form-control"
      id="exampleInputPassword1"
      placeholder='enter your password'
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">
      Phone Number
    </label>
    <input
      type="text"
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      placeholder='enter your mobile number'
      required
      />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">
      Address
    </label>
    <input
      type="text"
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      placeholder='enter your address'
      required
      />
    
  </div>
  
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </div>
    
     
   </Layout>
  )
}

export default Register;
