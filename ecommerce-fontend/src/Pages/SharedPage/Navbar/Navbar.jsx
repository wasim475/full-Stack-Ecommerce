import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li> <Link to={"/login"}>Login</Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
