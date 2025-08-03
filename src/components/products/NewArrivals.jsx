import { useEffect, useRef, useState } from "react";
import { PiLessThanBold, PiGreaterThanBold } from "react-icons/pi";
import { Link } from "react-router-dom"
import scrollImg from "../../assets/1000004717.jpg"
const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [scrollRight, setscrollRight] = useState(true);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [canScrollLeft, setcanScrollLeft] = useState(false);



    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -200 : 200;
        scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
    }


    const updateScrollButton = () => {
        const container = scrollRef.current;

        if (container) {
            const leftScroll = container.scrollLeft;
            setcanScrollLeft(leftScroll > 0);
            const rightScrollAble = container.scrollWidth > (container.scrollLeft + container.clientWidth);
            setCanScrollRight(rightScrollAble);

        }

        // console.log({
        //     scrollLeft: container.scrollLeft,
        //     clientWidth: container.clientWidth,
        //     containerScrollWidth: container.scrollWidth,
        // });

    }

    useEffect(() => {
        // console.log(scrollRef.current);
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButton);
            updateScrollButton();
            return () => container.removeEventListener("scroll", updateScrollButton);
        }
    })
    const newArrivals = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=1",
                    url:scrollImg,
                    altText: "Stylish Jacket"
                },
            ],
        },
        {
            _id: "2",
            name: "Elegant Dress",
            price: 150,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=2",
                    url:scrollImg,
                    altText: "Elegant Dress"
                },
            ],
        },
        {
            _id: "3",
            name: "Casual T-Shirt",
            price: 60,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=3",
                    url:scrollImg,
                    altText: "Casual T-Shirt"
                },
            ],
        },
        {
            _id: "4",
            name: "Classic Jeans",
            price: 90,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=4",
                    url:scrollImg,
                    altText: "Classic Jeans"
                },
            ],
        },
        {
            _id: "5",
            name: "Summer Hat",
            price: 30,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=5",
                    url:scrollImg,
                    altText: "Summer Hat"
                },
            ],
        },
        {
            _id: "6",
            name: "Leather Boots",
            price: 200,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=6",
                    url:scrollImg,
                    altText: "Leather Boots"
                },
            ],
        },
        {
            _id: "7",
            name: "Sporty Sneakers",
            price: 110,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=7",
                    url:scrollImg,
                    altText: "Sporty Sneakers"
                },
            ],
        },
        {
            _id: "8",
            name: "Formal Shirt",
            price: 80,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=8",
                    url:scrollImg,
                    altText: "Formal Shirt"
                },
            ],
        },
        {
            _id: "9",
            name: "Woolen Scarf",
            price: 40,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=9",
                    url:scrollImg,
                    altText: "Woolen Scarf"
                },
            ],
        },
        {
            _id: "10",
            name: "Denim Shorts",
            price: 70,
            images: [
                {
                    // url: "https://picsum.photos/500/500?random=10",
                    url:scrollImg,
                    altText: "Denim Shorts"
                },
            ],
        },
    ];

    return <section className="container mx-auto mb-10 relative px-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Explore New Arrivals</h2>
        <p className="text-center font-semibold">Discover the latest style straight off the runway, freshly added to keep your wardrobe the cutting edge of fashion.</p>
        <div className="absolute md:top-[20px] right-5  flex space-x-2  sm:top-[6px]">
            <button className={` z-50 p-2 rounded border cursor-pointer ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-600 cursor-not-allowed "}`}
                onClick={() => { scroll("left") }}
                disabled={!canScrollLeft}
            >
                <PiLessThanBold className="text-sm " />
            </button>
            <button className={`z-50 p-2 rounded border cursor-pointer ${canScrollRight ? "bg-white text-black" : "bg-gray-200 cursor-not-allowed text-gray-600 "}`}
                onClick={() => { scroll("right") }}
                disabled={!canScrollRight}

            >
                <PiGreaterThanBold className="text-sm " />
            </button>
        </div>

        {/* Scrollable Content */}

        <div ref={scrollRef} className="transition-all ease-in-out duration-300 contaier mx-auto overflow-x-scroll flex space-x-6 relative px-4 py-6 lg:px-0">
            {
                newArrivals.map((item, index) => (
                    // console.log(item);
                    <div id={item._id} key={index} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                        <img src={item.images[0]?.url} alt={item.images[0]?.altText || item.name} className="w-full h-[500px] object-cover rounded" />
                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-black p-4 rounded-b-lg">
                            <Link to={`/product/${item._id}`} className="block text-white">
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="mt-1">₹ {item.price * 50}</p>
                            </Link>
                        </div>
                    </div>
                ))

            }
        </div>

    </section>
};
export default NewArrivals;