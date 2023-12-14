import { Link } from "react-router-dom"
import logo from "../../../assets/logo.svg"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { GoSearch } from "react-icons/go"
import { useContext } from "react"
import { AuthContext } from "../../../Providers/AuthProvider"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error)
      })
  }
  const NavLinks = (
    <>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600">About</Link>
      </li>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600">Services</Link>
      </li>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600">Blog</Link>
      </li>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600">Contact</Link>
      </li>
      <li>
        {user?.email ? (
          <>
            <Link to="/bookings">Bookings</Link>
            <Link onClick={handleLogout}>Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  )
  return (
    <div className="navbar bg-base-100 h-24 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img className="w-14 md:w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end flex items-center gap-2 md:gap-5">
        <Link>
          <HiOutlineShoppingBag className="text-lg md:text-2xl"></HiOutlineShoppingBag>
        </Link>
        <Link>
          <GoSearch className="text-lg md:text-2xl"></GoSearch>
        </Link>
        <Link className="border-2 text-bg-primary font-semibold border-bg-primary rounded-md text-md px-2 py-2 md:text-lg md:px-5 md:py-3 hover:text-white hover:bg-bg-primary">
          Appointment
        </Link>
      </div>
    </div>
  )
}

export default Navbar
