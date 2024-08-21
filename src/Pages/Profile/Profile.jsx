import Header from "@/components/Home/Header"
import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "@heroicons/react/20/solid"
import { Link } from "react-router-dom"




const Profile = () => {
    
  return (
    <div>
      <Header/>
      <div className="px-10 md:px-20 my-10">
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl font-poppins tracking-tight">My Lisiting</h2>
            <Link to={'/add-listing'} >
            <Button className="bg-logoBlue flex items-center gap-2 "> <PlusCircleIcon className="size-4"/>Add New Listing</Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
