import {useState}  from 'react'
import { addStudent } from '../../Services/StudentService';

const NewStudent = () =>{
    const [formData , setFormData] = useState(
        {
            name:'',
           rollno:'',
           class:'',
           math:'',
           english:'',
           science:''
           
        }
    )
      const handlechange = (e)=>{
          setFormData({
            ...formData ,
            [e.target.name]: e.target.value
        } )
       }

       
      const  handlesubmit = async(e)=>{

        e.preventDefault();
        try{
            await addStudent(formData)
            alert("Student Data Successfully")
        }
        catch(error){
          console.log(error)
        }}

      
    return(
        <div className="add-student">
            <h1>Add Students</h1>
            <form   onClick={handlesubmit}>
              <input type="text"  placeholder ="Enter Name" onChange={handlechange} />
              <input type="text" placeholder = "Enter Class Name" onChange={handlechange} />
              <input type= 'number' placeholder ="ENter ROll No."  onChange = {handlechange} />
              <input type= 'number' placeholder ="ENter Math Marks"  onChange = {handlechange}/>
              <input type="number" placehodler = "Enter English mark"  onChange = {handlechange}/>
              <input type= 'number'  placeholder = "enter Science makrs"  onchange = {handlechange }/>

              <button type= "submit">Add student</button>
             </form>
        </div>
    )
}

export default NewStudent