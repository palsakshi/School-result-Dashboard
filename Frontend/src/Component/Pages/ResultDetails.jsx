import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getStudentByRoll } from '../../Services/StudentService'

const ResultDetails = ()=>{
    const[student, setStudent] = useState(null)
    const {rollNO} = useParams();

    useEffect (()=>{
        fetchStudent()
    }, [])


    const fetchStudent = async()=>{
      try{

        const res = await getStudentByRoll(rollNO)
        setStudent(res.data)
      }
      catch(err){
        console.log(err)
      }
    }

    if(!student){
        return <h2>Loading.....</h2>
    }

    return(

        <div className= "result-page">
            <h2>Student Result</h2>

             <img  src={`http://localhost:5000/uploads/${student.photo}`} alt='student'  width='120' />

        <h3>Name: {student.name}</h3>
      <h3>Roll No: {student.rollNo}</h3>
      <h3>Class: {student.className}</h3>
      <table border='1'>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Math</td>
            <td>{student.math}</td>
          </tr>

          <tr>
            <td>English</td>
            <td>{student.english}</td>
          </tr>

          <tr>
            <td>Science</td>
            <td>{student.science}</td>
          </tr>
        </tbody>
      </table>

       <h2>Total: {student.total}</h2>
      <h2>Percentage: {student.percentage}%</h2>
      <h2>Status: {student.status}</h2>

        </div>
    )

}

export default ResultDetails