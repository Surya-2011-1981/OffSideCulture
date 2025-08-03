import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "../common/SearchBar";
import CartDrawer from "./CartDrawer";
import logo from "../../assets/OffsideCultureLogo.png"
const Navbar = () => {
    const [isDrawerOpen, setDrawerStatus] = useState(false);
    const changeDrawerStatus = () => {
        setDrawerStatus(!isDrawerOpen);
    }

    const [isMenuOpen, setMenuStatus] = useState(false);
    const handleMenu = () => {
        setMenuStatus(!isMenuOpen);
    }
    return <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6 bg-[#F9F7F6] box-border overflow-hidden">
            {/*Left-  Logo */}
            <div>
                <Link to="https://offsideculture.co.uk" className="text-2xl font-medium ">
                    <img src={logo} alt="OffsideCulture" height={`60px`} width={`60px`} className=" transition-all duration-300  hover:scale-[1.2]" />
                </Link>
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:flex space-x-6 pr-10">
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">TOPWEAR</Link>
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">BottomWear</Link>
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">Men</Link>
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">Women</Link>
            </div>
            {/* Right - Icons */}
            <div className="flex items-center space-x-4">
                <Link to="/profile" > <HiOutlineUser className="h-6 w-6 transition-all duration-300  text-gray-600 hover:text-black hover:scale-[1.2]" title="user" /> </Link>
                <button to="/shopping" className="relative  text-gray-600 hover:text-black">
                    {/* <HiOutlineShoppingBag className="h-6 w-6 " /> */}
                    <RiShoppingBag4Line onClick={changeDrawerStatus} className="h-6 w-6 cursor-pointer transition-all duration-300 hover:text-black hover:scale-[1.2]" />
                    <span className="bg-red-500 absolute -top-1 rounded-full text-white text-xs px-1 py-0.1 ">4</span>
                </button>

                {/* Search Icon */}
                <SearchBar></SearchBar>
                {/* Hamburger*/}

                <button onClick={handleMenu}>
                    <HiBars3BottomRight className="block h-6 w-6 text-gray-600 text-2xl transition-all duration-300 hover:text-black hover:scale-[1.2] cursor-pointer sm:hidden " />
                </button>
            </div>
        </nav>
        <CartDrawer isDrawerOpen={isDrawerOpen} changeDrawerStatus={changeDrawerStatus}></CartDrawer>

        {/* Mobile Navigation */}

        <div className={`fixed  top-0 left-0 w-4/5 sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-2/7 2xl:w-2/6 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} rounded`}>
            <button onClick={handleMenu} >
                <IoMdClose className="absolute right-1 top-1 cursor-pointer border rounded text-xl transition-all duration-300 text-gray-500 hover:scale-[1.2] hover:text-black" />
            </button>
            <h1 className="text-center border-gray-400 border-b-2 w-full">Menu</h1>
            <div className="flex flex-col justify-baseline space-y-15 mt-10 items-center  h-full">
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">MEN</Link>
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">Women</Link>
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">TopWear</Link>
                <Link to="#" className="text-gray-700 hover:scale-[1.2] hover:text-black transition-all duration-300 text-sm font-medium uppercase">BottomWear</Link>
            </div>
        </div>
    </>
}
export default Navbar;