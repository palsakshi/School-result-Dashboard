import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div className ='navbar'>
            <h2> School Result</h2>

            <div>
                <Link to='/'>Home</Link>
                <Link to ='/AdminLogin'>Admin</Link>
            </div>
        </div>
    )
}
export default Navbar