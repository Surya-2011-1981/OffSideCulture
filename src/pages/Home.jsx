import Hero from "../components/layout/Hero";
import GenderCollection from "../components/products/GenderCollection";
import ProductDetails from "../components/products/ProductDetails";
import ProductCard from "../components/products/ProductCard";
import scrollImg from "../assets/womens-collection.png"
const Home = () => {

    const placeholderProducts = [
        {
            _id: 1,
            name: "Classic Check Shirt",
            price: 30,
            // image: "https://picsum.photos/500/500?random=56",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
        {
            _id: 2,
            name: "Slim fit stretch shirt",
            price: 29,
            // image: "https://picsum.photos/500/500?random=57",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"

        },
        {
            _id: 3,
            name: "Casual Denim shirt",
            price: 40,
            // image: "https://picsum.photos/500/500?random=58",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"

        },
        {
            _id: 4,
            name: "Printed Stylish Shirt",
            price: 50,
            // image: "https://picsum.photos/500/500?random=59",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
        {
            _id: 5,
            name: "Printed Stylish Shirt",
            price: 50,
            // image: "https://picsum.photos/500/500?random=59",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
        {
            _id: 6,
            name: "Printed Stylish Shirt",
            price: 50,
            // image: "https://picsum.photos/500/500?random=59",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
        {
            _id: 7,
            name: "Printed Stylish Shirt",
            price: 50,
            // image: "https://picsum.photos/500/500?random=59",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
        {
            _id: 8,
            name: "Printed Stylish Shirt",
            price: 50,
            // image: "https://picsum.photos/500/500?random=59",
            image: scrollImg,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, minima"
        },
    ]

    return <div>
        {/* Hero Section  */}
        <Hero></Hero>
        {/* Gender Collection */}
        <GenderCollection></GenderCollection>
        {/* New Arrivals */}
        {/* <NewArrivals></NewArrivals> */}
        {/* Best Seller */}
        <h2 className="text-center text-3xl font-bold mb-4">
            Top Seller
        </h2>
        <ProductDetails></ProductDetails>

        {/* Top seller for women */}
        {/* <div className="container mx-auto">
            <h3 className="text-center text-3xl font-semibold mb-4 text-capitalize">
                Top wear for women
            </h3>
            <ProductCard products={placeholderProducts}></ProductCard>
        </div> */}
    </div>
};
export default Home;