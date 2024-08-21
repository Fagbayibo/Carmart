import { UserButton, useUser } from '@clerk/clerk-react'
import Logo from '../../assets/Logo.svg'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user, isSignedIn} = useUser( );
  return (
    <div className='flex justify-between items-center py-4 px-9 border-b-[1px]'>
      <Link to={'/'}><img src={Logo} alt="CarMart-Logo" width={40}/></Link>
      <ul className='hidden md:flex gap-7 font-poppins'>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-logoBlue'>Home</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-logoBlue'>Search</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-logoBlue'>New</li>
        <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-logoBlue'>Preowned</li>
      </ul>

      {isSignedIn ? (
        <div className='flex items-center gap-4'>
            <UserButton/>
            <Link to={'add-listing'}><Button>Submit Listing</Button></Link>
        </div>
      ): <Link to={'/profile'}><Button>Submit Listing</Button></Link>}
    </div>
  )
}

export default Header
