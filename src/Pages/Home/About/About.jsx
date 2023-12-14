import about01 from "../../../assets/images/about_us/person.jpg"
import about02 from "../../../assets/images/about_us/parts.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
const About = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="dark:bg-gray-800 py-5 md:py-10 lg:py-20 md:mb-10">
      <div className="px-6">
        <div className="flex flex-col md:flex-row md:gap-20 -mx-4">
          <div data-aos="fade-right" className="md:flex-1">
            <div className="w-[200px] h-[200px] md:h-[273px] md:w-[260px] lg:h-[473px] lg:w-[460px] relative rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full  h-full object-container rounded-lg"
                src={about01}
                alt="Product Image"
              />
              <div className="bg-white absolute -bottom-16 p-2 rounded-lg -right-14 ">
                <img
                  className="border-10 w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-72 object-container rounded-sm"
                  src={about02}
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="md:flex-1 px-4">
            <h2 className="mt-10 md:mt-0 lg:mt-0 md:text-2xl font-bold text-bg-primary dark:text-white mb-2">
              About Us
            </h2>
            <div className="md:space-y-4 lg:space-y-6">
              <span className="md:text-xl lg:text-6xl font-bold text-gray-700 dark:text-gray-300">
                We are qualified & of experience in this field
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don`t look even
                slightly believable.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which dont look even slightly
                believable.
              </p>

              <div className="flex justify-center -mx-2 lg:mb-4">
                <div className="w-1/2 px-2 mt-5 md:mt-0">
                  <button className="w-full bg-bg-primary dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Get More Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
