import {useState}  from  'react'
import {useNavigate}  from 'react-router-dom'

const AdminLogin = ()=>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

   const  navigate = useNavigate()

   const handleSubmit=(e)=>{
    e.preventDefault()
        if(email == "pal74089@gmail.com"  && password == "4321"){
           navigate('/Dasboard')
        }

        else{
            alert("Invalid Credentials");
        }
   }
  return(

    <div className="login-page">
        <form  onSubmit={handleSubmit}>
        <h1>Admin-Login</h1>

        <input type="email" placeholder="Please Enter Your Email" value={email} 
       onChange={(e)=>setEmail(e.target.value)}/>

        <input type='password' placeholder='Enter Password' value={password}
         onChange= {(e)=> setPassword(e.target.value)}/>

        <button type="submit"> Login</button>
        </form>
    </div>
  )

}
export default AdminLogin