import { Link } from "react-router-dom";
const ProductCard = ({ products }) => {
    return <div>
        <div className=" flex items-center justify-center gap-20 mt-10 flex-wrap">
            {
                products.map((item, index) => (
                    <div className="flex flex-col " key={index}>
                        <Link key={index} to={`/product/${item._id}`}>
                            <img src={item.image} alt={item.name} className="rounded-lg h-[400px] w-[250px]" />
                        </Link>
                        <p className=" text-md font-semibold mt-1">
                            {item.name}
                        </p>
                        <span className="text-gray-600 text-sm">${item.price}</span>
                    </div>
                ))
            }
        </div>
    </div>;
}
export default ProductCard;