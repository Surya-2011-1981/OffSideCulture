import Topbar from "../layout/Topbar";
import Navbar from "../layout/Navbar";
import Cart from "../layout/Cart";
const Header = () => {
    return <header className="leading-[2] border-b border-gray-300 ">
        {/* TopBar */}
        <Topbar></Topbar>
        {/* NavBar */}
        <Navbar></Navbar>


    </header>
}
export default Header;