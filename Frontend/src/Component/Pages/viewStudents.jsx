import {useState, useEffect}  from 'react'
import {Link} from 'react-router-dom'
import { getAllStudent } from '../../Services/StudentService'

const ViewAllStudents = () =>{
   const [students, setStudents] = useState()

   useEffect(()=>{
    fetchStudents()
   }, [])


const  fetchStudents = async()=>{
      try{

        const res = await getAllStudent()
        setStudents(res.data)
      }
      catch(error){
          console.log(error)
      }

}
return(
<div>
  <h1>All Students</h1>

  <table border= '1'>
     <thead>
      <tr>
        <th>Name</th>
         <th>Roll No.</th>
          <th>Class</th>
           <th>Action</th>
      </tr>
     </thead>

     <tbody>
      {students.map((student)=>(
         <tr key= {student.id}>
          <td>{student.name}</td>
           <td>{student.rollNo}</td>
            <td>{student.ClassName}</td>

            <td><Link to={`/Editstudents/${student.id}`}></Link></td>
         </tr>


))}

     </tbody>
  </table>

</div>

)}

export default  ViewAllStudents