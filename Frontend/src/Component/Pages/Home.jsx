import  {useState}  from  'react'
import {useNavigate}  from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/footer'

const Home = ()=>{
   const [rollNo, setRollNo]  =useState('')
   const Navigate = useNavigate()


   const handleSearch = ()=>{
     if(!rollNo){
      alert("roll No. not found")

      return
     }

     Navigate(`/ResultDetails/${rollNo}`)
   }

   return (
    <>
    <div className="main-div">
    <Navbar/>

    <div className="container">
        <h1>Search  Result</h1>

        <input type="text" placeholder="Enter Your RollNo"  value ={rollNo}
        onChange ={(e)=>setRollNo(e.target.value)}/>

<button onClick={handleSearch}>Search</button>

    </div>
    <Footer/>
    </div>
    </>
   )

}

export default Home