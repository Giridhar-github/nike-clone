import { Link } from "react-router-dom"
import { BsSearch } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
const Header = () => {
    return (
        <div className="sticky top-0 z-40">
            <div className="text-black bg-slate-100 h-9 flex justify-between py-2">
                <div>
                    <img className="h-6 ms-4" src="https://cdn.freebiesupply.com/images/large/2x/air-jordan-logo-png-transparent.png" />
                </div>
                <div className="flex gap-x-2 me-4 md:me-16 text-black font-semibold text-xs items-center">
                    <Link to={''}>Find a store</Link>
                    <Link to={''}>Help</Link>
                    <Link to={''}>Join Us</Link>
                    <Link to={''}>Sign In</Link>
                </div>
            </div>
            <div className="flex items-center justify-between h-16 bg-white ">
                <div className="basis-1/4">
                    <img className="h-6 ps-6" src="https://www.edigitalagency.com.au/wp-content/uploads/nike-logo-png-black-icon-white-background-large.png" />
                </div>
                <div className=" hidden md:flex md:gap-x-5 md:font-semibold md:flex-1 md:justify-center">
                    <Link to={''}>New & Featured</Link>
                    <Link to={''}>Men</Link>
                    <Link to={''}>Women</Link>
                    <Link to={''}>Kids</Link>
                    <Link to={''}>Sale</Link>
                    <Link to={''}>SNKRS</Link>
                </div>
                <div className="flex items-center justify-center gap-x-5 basis-1/2 md:basis-1/4  px-3">
                    <div className="flex items-center border rounded-full ps-3 bg-slate-100 h-10">
                        <BsSearch />
                        <input type="text" placeholder="Search" className=" py-1 px-1 bg-transparent ms-2 focus:outline-none" />
                    </div>
                    <AiOutlineHeart className="text-2xl" />
                    <BsBag className="text-xl" />
                </div>
            </div>
        </div>
    )
}

export default Header