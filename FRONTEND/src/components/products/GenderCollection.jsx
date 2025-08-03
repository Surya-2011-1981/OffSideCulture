import mensCollection from "../../assets/mens-collection.png";
import womensCollection from "../../assets/womens-collection.png";
import { Link } from "react-router-dom";
const GenderCollection = () => {
    return <section className="py-10 !px-12 lg:px-0">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 ">
            <div className="flex-1 relative">
                <img src={womensCollection} alt="Women's Collection" className="w-[90%] h-[700px] object-top rounded-sm" />
                <div className="absolute bottom-8 left-2 bg-white bg-opacity-90 p-4 rounded-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Women's Collection
                    </h2>
                    <Link to="/collections/all?gender=men" className="underline text-gray-600 transition-all duration-300 hover:text-black hover:scale-[1.2]">Shop Now</Link>
                </div>
            </div>
            {/* Mens Collection */}
            <div className="flex-1 relative">
                <img src={mensCollection} alt="Wonen's Collection" className="w-[90%] h-[700px] object-top rounded-sm " />
                <div className="absolute bottom-8 left-2 bg-white bg-opacity-90 p-4 rounded-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Men's Collection
                    </h2>
                    <Link to="/collections/all?gender=men" className="underline text-gray-600 transition-all duration-300 hover:text-black hover:scale-[1.2]">Shop Now</Link>
                </div>
            </div>
        </div>
    </section>
}
export default GenderCollection;