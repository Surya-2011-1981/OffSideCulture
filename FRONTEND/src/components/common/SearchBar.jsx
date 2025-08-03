import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);


    const hanldeOnClickSearch = () => {
        setIsOpen(!isOpen);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchTerm);
    }
    return <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto "}`}>

        {
            isOpen ? (
                <form onSubmit={handleSearch} className="relative flex items-center justify-center w-full">
                    <div className="relative w-1/2 ">
                        <input type="text" placeholder="search" value={searchTerm}
                            className="bg-gray-100 px-4 py-2 pl-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <button type="submit" className=" absolute right-2 top-1/2 cursor-pointer transform -translate-y-1/2 text-gray-600 hover:text-gray-800" onClick={handleSearch}>
                            <HiMagnifyingGlass className="h-6 w-6 " />
                        </button>
                    </div>
                    {/* Close Icon */}
                    <button type="button" className="relative left-2 cursor-pointer text-gray-600 hover:text-gray-900" onClick={hanldeOnClickSearch}>
                        <HiMiniXMark className="h-6 w-6" />
                    </button>

                </form>
            ) : (
                <button onClick={hanldeOnClickSearch}>
                    <HiMagnifyingGlass className="h-6 w-6 relative top-0.5 left-0.5 text-gray-600  font-extrabold transition-all duration-300 hover:scale-[1.2] hover:text-black cursor-pointer" />
                </button>
            )
        }

    </div>
}
export default SearchBar;