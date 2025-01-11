import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <ul className='flex justify-between'>
        <li><Link to="/home">Home</Link></li>
        <li> <Link to={"/login"}>Login</Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
