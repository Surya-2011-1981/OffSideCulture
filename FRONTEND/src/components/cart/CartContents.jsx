import { MdDelete } from "react-icons/md";
const CartContents = () => {

    const cartProduct = [
        {
            pId: 1,
            name: "T-Shirt",
            size: "L",
            color: "White",
            quantity: 2,
            price: 15,
            image: 'https://picsum.photos/200?random=1',
        },
        {
            pId: 2,
            name: "T-Shirt",
            size: "L",
            color: "White",
            quantity: 2,
            price: 15,
            image: 'https://picsum.photos/200?random=2',
        },
        {
            pId: 3,
            name: "T-Shirt",
            size: "L",
            color: "White",
            quantity: 2,
            price: 15,
            image: 'https://picsum.photos/200?random=3',
        },
        {
            pId: 4,
            name: "T-Shirt",
            size: "L",
            color: "White",
            quantity: 2,
            price: 15,
            image: 'https://picsum.photos/200?random=4',
        },
        {
            pId: 5,
            name: "T-Shirt",
            size: "L",
            color: "White",
            quantity: 2,
            price: 15,
            image: 'https://picsum.photos/200?random=5',
        },
    ];

    return <div>
        {
            cartProduct.map((product, index) => (
                <div key={index} className="flex items-start justify-between py-4 border-b border-gray-400">
                    <div className="flex items-start gap-3">
                        <img src={product.image} alt="product.name" className="w-20 h-20 object-cover rounded-lg " />
                        <div className="">
                            <h3 className="text-xs">{product.name}</h3>
                            <p className="text-xs">Size : {product.size} | Color : {product.color}</p>
                            <div className="flex items-center mt-2 gap-2">
                                <button className="h-6 w-5 flex items-center justify-center border border-gray-400 rounded text-sm leading-none cursor-pointer">
                                    -
                                </button>

                                <span>
                                    {product.quantity}
                                </span>

                                <button className="h-6 w-5 flex items-center justify-center border border-gray-400 rounded text-sm leading-none cursor-pointer">
                                    +
                                </button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs">
                            Price : ₹{product.price * 50}
                        </p>
                        <MdDelete className="text-xl realtive text-red-600 cursor-pointer right-0" />
                    </div>
                </div>
            ))
        }
    </div>
};
export default CartContents;