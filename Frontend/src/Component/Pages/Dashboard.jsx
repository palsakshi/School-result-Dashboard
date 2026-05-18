import {Link}  from 'react-router-dom'

const Dashboard = ()=>{
    return (
        <div className="admin-dashboard">
   <h1>Admin-Dashboard</h1>
   
   <div>
    <Link to="/addstudent">Add Student</Link>
   </div>

 <div>
    <Link to="/ViewAllStudents">View Students</Link>
   </div>
        </div>
    )
}
export default Dashboard