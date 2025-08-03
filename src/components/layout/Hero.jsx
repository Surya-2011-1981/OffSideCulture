import { Link } from "react-router-dom";
import heroBg from "../../assets/heroBg.png"
const Hero = () => {
    return <section className="relative">
        <img src={heroBg} alt="HeroImage" width="2400px" className="h-[400px] md:h-[600px] lg:h-[750px] object-fill" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-blue-400 p-6 ">
                <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase md-4">
                    Be Sports <br />
                    Ready
                </h1>
                <p className="text-sm tracking-tighter md:text-lg mb-6 text-white">
                    Explore our vaction ready outfits with fast worldwide shipping.
                </p>
                <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
                    Shop Now
                </Link>
            </div>
        </div>
    </section>
};
export default Hero;