import Header from "../common/Header";
import Footer from "../common/Footer";
import { Outlet } from "react-router-dom";
const User = () => {
    return <>
        {/* Header */}
        <Header></Header>
        {/* Main Content */}
        <main>
            <Outlet></Outlet>

        </main>
        {/* Footer */}
        <Footer></Footer>
    </>
}
export default User;