import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
const Footer = () => {
    return <footer className="border-t border-gray-400 py-12 mt-8">
        <div className="container mx-auto  grid grid-cols-1 gap-8 px-4  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {/* NewsLetter */}
            <div className="">
                <h3 className="text-lg text-gray-800  mb-4 ">Newsletter</h3>
                <p className="mb-4 text-gray-600 ">Be the first to hear about new products, exclusive events and online offers.</p>
                <p className="font-medium text-gray-800 text-sm mb-6">Sign up and get 10% off your first order.</p>

                <form className="flex ">
                    <input type="text" placeholder="Enter your email" className="border-t border-l border-b border-gray-400 rounded-l-md  text-sm  focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all md:w-3/5 p-3 sm:w-1/3 lg:w-3/5" />
                    <button type="submit" className="text-white transition-all duration-300 bg-black px-6 py-3 text-sm rounded-r-md rounded-br-md cursor-pointer hover:bg-gray-800">Subscribe</button>
                </form>

            </div>
            {/* Shop */}
            <div className="flex flex-col ">
                <h3 className="text-lg text-gray-900  mb-4">Shop</h3>
                <ul className="text-gray-600 text-sm">
                    <li className="">Men's Top Wear</li>
                    <li className="mt-3">Women's Top Wear</li>
                    <li className="mt-3">Men's Botton Wear</li>
                    <li className="mt-3">Women's Botton Wear</li>
                </ul>
            </div>
            {/* Support */}
            <div className="flex flex-col ">
                <h3 className="text-lg text-gray-900  mb-4">Support</h3>
                <ul className="text-gray-600 text-sm">
                    <li className=""><Link to="#" className="cursor-pointer transition-all duration-300 hover:text-black "  >Contact-Us</Link></li>
                    <li className="mt-3"><Link to="#" className="cursor-pointer transition-all duration-300 hover:text-black ">About Us</Link></li>
                    <li className="mt-3"><Link to="#" className="cursor-pointer transition-all duration-300 hover:text-black "  >FAQs</Link></li>
                    <li className="mt-3"><Link to="#" className="cursor-pointer transition-all duration-300 hover:text-black " >Features</Link></li>
                </ul>
            </div>
            {/* Social Media */}
            <div className="flex flex-col ">
                <h2 className="text-lg text-gray-900  mb-4">Follow Us</h2>
                <div className="flex gap-4 text-gray-700">
                    <a href="https://www.facebook.com"><FaMeta className="cursor-pointer transition-all duration-300 hover:text-black hover:scale-[1.1]"></FaMeta></a>
                    <a href="https://www.instagram.com">
                        <FaInstagram className="cursor-pointer transition-all duration-300 hover:text-black hover:scale-[1.1]"></FaInstagram>
                    </a>

                    <a href="https://www.twitter.com">

                        <FaXTwitter className="cursor-pointer transition-all duration-300 hover:text-black hover:scale-[1.1]"></FaXTwitter>
                    </a>
                </div>
                <div className="flex flex-col text-sm text-gray-600 mt-6 ">
                    <h2>Call Us</h2>
                    <p className="flex text-black mt-1">
                        <LuPhoneCall className="relative top-1 right-1"></LuPhoneCall>
                        <Link to="tel:+91 9155608284" className="hover:text-gray-600 transition-all duration-200"> +(91)- 915-560-8284</Link>
                    </p>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-6">
            <p className="text-gray-900 text-sm text-center py-4 text-capitalize">
                ©️ 2025 OffsideCulture , All right reserved
            </p>

        </div>
    </footer>
}
export default Footer;