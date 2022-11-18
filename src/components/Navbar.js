import { Link } from 'react-router-dom'
// import logo from '../assets/logo.svg'

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/'> Genres </Link>
                </li>
                <li>
                    LOGO
                    {/* <image src={logo} /> */}
                </li>
                <li>
                    <Link to='/'> Create Account </Link>
                </li>
                <li>
                    <Link to='/'> Login </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar