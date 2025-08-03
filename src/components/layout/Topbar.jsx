import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Topbar = () => {
    return <div className="bg-[#335ffff4] text-white text-center" >
        <div className="container mx-auto flex justify-between items-center px-4" >
            <div className="hidden md:flex gap-4 ">
                <a href="#" className="hover:text-gray-400 transition-all duration-300 hover:scale-[1.2]"> <FaMeta /> </a>
                <a href="#" className="hover:text-gray-400 transition-all duration-300 hover:scale-[1.2]"><FaInstagram /></a>
                <a href="#" className="hover:text-gray-400 transition-all duration-300 hover:scale-[1.2]"> <FaXTwitter /> </a>
            </div>
            <div className="mx-auto md:m-0">
                <span className=" text-white text-sm text-center text-uppercase">
                    We Provide You the Best Qualtity Merchandise.
                </span>
            </div>
            <div className="hidden md:block">
                <Link to="tel:+91 9155608284" className="hover:text-gray-600 transition-all duration-300 hover:scale-[1.2]"> +(91)- 123-456-7890</Link>
            </div>
        </div >

    </div >
}
export default Topbar;