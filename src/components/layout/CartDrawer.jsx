import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import CartContents from "../cart/CartContents";
// import styles from "../css/CartDrawer.module.css";
const CartDrawer = ({ isDrawerOpen, changeDrawerStatus }) => {

    return <div className={` fixed top-0 right-0 w-4/5  sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-2/7 2xl:w-2/6 h-full bg-white shadow-lg transform-transition duration-300 flex flex-col z-50 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Close Drawer */}

        <div className="flex justify-end p-4 ">
            <button onClick={changeDrawerStatus} >
                <IoMdClose className="cursor-pointer border rounded text-xl transition-all duration-300 text-gray-500 hover:scale-[1.2] hover:text-black" />
            </button>
        </div>
        {/* Cart Content */}

        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 absolute top-1">Your Cart</h2>
            <CartContents />
        </div>

        <div className="p-4 bg-white sticky bottom-0">
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">CheckOut</button>

            <p className="text-xs tracking-tighter text-gray-500 mt-2 text-center ">
                Shipping taxes, and discout codes will calculated at checkout.
            </p>
        </div>

    </div>
};
export default CartDrawer;