import { useEffect, useState } from "react";
import img from "../../assets/register.webp"
import topSeller1 from "../../assets/TopSeller_1.jpg"
import topSeller2 from "../../assets/TopSeller_2.jpg"
import A_L_1 from "../../assets/A_L_1.jpg"
import A_L_2 from "../../assets/A_L_2.jpg"
import A_L_3 from "../../assets/A_L_3.jpg"
import A_L_4 from "../../assets/A_L_4.jpg"

import { toast } from "sonner";
import ProductCard from "./ProductCard";
const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occassion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["gray", "black"],
    images: [{
        // url: "",
        url: topSeller1,
        altText: "Stylish Jacket 1"
    },
    {
        // url: "",
        url: topSeller2,
        altText: "Stylish Jacket 2"
    },
    ],
};

const ProductDetails = () => {

    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [isAddToCartDisabled, setAddToCardDisabled] = useState(false);
    const [mainImage, setMainImage] = useState(null);


    useEffect(() => {
        if (selectedProduct.images.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);


    const handleAddtoCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select size and color before adding to cart");
        } else {
            if (quantity < 1) {
                toast.error("The item quantity can't be 0");
            }
            else {
                setAddToCardDisabled(true);
                setTimeout(() => {
                    toast.success("Item Successfully added to the cart")
                    setAddToCardDisabled(false);
                    setSelectedColor(null);
                    setQuantity(0);
                    setSelectedSize(null);
                }, 2000)
                return;
            }
        }
    }

    const alsoLike = [
        {
            _id: 1,
            name: "Classic Check Shirt",
            price: 30,
            // image: "",
            image: A_L_1,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
        {
            _id: 2,
            name: "Slim fit stretch shirt",
            price: 29,
            // image: "",
            image: A_L_2,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"

        },
        {
            _id: 3,
            name: "Casual Denim shirt",
            price: 40,
            // image: "",
            image: A_L_3,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"

        },
        {
            _id: 4,
            name: "Printed Stylish Shirt",
            price: 50,
            // image: "",
            image: A_L_4,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
    ]

    return <>
        {/* Top Seller Section */}
        <div className=" sm:w-full p-4 lg:w-3/4 mx-auto bg-white lg:p-8 rounded-sm flex box-border flex-col md:flex-row items-center">
            <div className=" md:flex-row w-1/2 flex  justify-end gap-2 flex-col-reverse">
                <div className="tinyImages flex md:flex-col gap-1 sm:flex-row">
                    {
                        selectedProduct.images.map((image, index) => (
                            <img
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`rounded-xs h-20 w-15 cursor-pointer   ${mainImage === image.url ? `border-2` : "border-gray-300"}`}
                                key={index}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))
                    }
                </div>
                <div className="mainImage " >
                    <img src={mainImage} alt="mainImage" className="rounded-xs md:w-[285px] md:min-h-[500px] min-h-[400px] border-1 border-gray-800 rounded-2xl" />
                </div>
            </div>

            {/* Cloth Details */}
            <div className="details  w-1/2 flex flex-col gap-2 md:px-4 md:min-h-[500px] min-h-[400px] mb-2">
                <h2 className="text-2xl">{selectedProduct.name}</h2>
                <span className="text-gray-500 ">
                    ${selectedProduct.originalPrice}
                </span>
                <p className="text-sm font-medium text-gray-800">
                    {selectedProduct.description}
                </p>
                <div className="flex flex-col ">
                    <span className="font-gray-900">Color : </span>
                    <div className="flex gap-3">
                        {
                            selectedProduct.colors.map((color, index) => (
                                <button className={`h-5 w-5 rounded-full text-center border-1 cursor-pointer ${selectedColor == color ? "border-green-400 border-4" : ""}`} style={{ backgroundColor: color }} key={index} onClick={() => setSelectedColor(color)}></button>
                            ))
                        }

                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-gray-800"> Size : </span>
                    <div className="flex gap-2">
                        {
                            selectedProduct.sizes.map((size, index) => (
                                <button
                                    className={`h-7 w-7 rounded-xs text-center border-1 cursor-pointer ${selectedSize === size ? "bg-black text-white" : ""}`}
                                    key={index}
                                    onClick={() => setSelectedSize(size)}
                                >{size}</button>
                            ))
                        }

                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span> Quantity : </span>
                    <div className="flex gap-2">
                        <button className="h-7 w-5 rounded-xs text-center border-1 cursor-pointer active:bg-black active:text-white font-bold bg-gray-300" disabled={quantity < 1} onClick={() => { setQuantity(quantity - 1) }}
                        >-</button>
                        <span> {quantity} </span>
                        <button className="h-7 w-5 rounded-xs text-center border-1 cursor-pointer active:bg-black active:text-white font-bold bg-gray-300" onClick={() => { setQuantity(quantity + 1) }}>+</button>
                    </div>
                </div>
                <button className={`w-full bg-gray-900 rounded-sm text-capitalize text-center text-white h-10 cursor-pointer mt-3 !hover:scale-[1.01] ${isAddToCartDisabled ? "cursor-not-allowed opacity-50" : ""}`}
                    onClick={handleAddtoCart}
                    disabled={isAddToCartDisabled}
                >{isAddToCartDisabled ? "adding..." : "Add to cart"}</button>
                <div className="flex flex-col gap-3 mt-4">
                    <span className="font-medium ">Characteristics :</span>
                    <div className="flex flex-col  items-start text-xs">
                        <div className="flex justify-around gap-19">
                            <span className="text-gray-800">Brand : </span>
                            <span className="text-black">Urban Clinic  </span>
                        </div>
                        <div className="flex justify-around gap-15">
                            <span className="text-gray-800">Material : </span>
                            <span className="text-black">Cotton  </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >

        {/* Also like section */}
        <div className="alsoLikeSection p-6 border-top-1">
            <h3 className="text-center text-2xl font-semibold">You May Also Like</h3>
            <ProductCard products={alsoLike}></ProductCard>
        </div>
    </>
}
export default ProductDetails;