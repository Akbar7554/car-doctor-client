import AOS from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"
const Service = ({ service }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  const { _id,title, img, price } = service
  return (
    <div data-aos="slide-up" className="card lg:w-96 bg-base-100 border-2">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl md:h-[200px]lg:w-[300px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold md:text-2xl">{title}</h2>
        <div className="card-actions">
          <p className="text-bg-primary font-semibold text-md md:text-lg lg:text-xl">
            Price : ${price}
          </p>
          <Link to={`/book/${_id}`} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Service
