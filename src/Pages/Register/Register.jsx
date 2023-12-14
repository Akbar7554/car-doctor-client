import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
import loginImage from "../../assets/images/login/login.svg"
import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(name, email, password)
    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <div className="py-16">
      <div className="flex flex-col lg:flex-row md:items-center justify-between bg-white rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div>
          <img className="w-[400px]" src={loginImage} alt="" />
        </div>
        <div className="w-full border-2 rounded-lg p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Register
          </h2>
          <div
            href="#"
            className="flex border-2 items-center justify-center mt-4 text-white rounded-lg"
          >
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Sign Up with
            </h1>
            <div className="flex gap-3 items-center mr-3">
              <button>
                <FcGoogle className="text-2xl"></FcGoogle>
              </button>
              <button>
                <FaFacebook className="text-2xl text-[#3b5998]"></FaFacebook>
              </button>
              <button>
                <FaLinkedin className="text-2xl text-[#0072b1]"></FaLinkedin>
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or Register with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="name"
                name="name"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-bg-primary text-white font-bold py-2 px-4 w-full rounded hover:bg-bg-secondary hover:text-bg-primary "
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <h1 href="#" className="text-xs text-gray-500 uppercase">
              or{" "}
              <Link to="/login" className="text-bg-primary text-base font-bold">
                Sign In
              </Link>
            </h1>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
