import Search from "../Global/Search/Search"
import heroImage from '../../assets/tesla.png'

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center pt-10 gap-1 h-[600px] w-full ">
        <h2 className="text-lg font-poppins  font-normal">Find cars for sale and for rent near you</h2>
        <h1 className="text-6xl font-Bree pb-4 ">Find Your Dream Car</h1>
        <Search/>
        <img src={heroImage} alt="Tesla" width={900} />
      </div>
    </div>
  )
}

export default Hero
