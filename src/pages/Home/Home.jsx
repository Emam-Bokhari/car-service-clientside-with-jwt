import { useLoaderData } from "react-router-dom";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {

    const servicesData=useLoaderData()
    // console.log(servicesData);
    // console.log(servicesData);

    return (
        <div>

            {/* Banner */}
            <Banner />

            {/* About */}
            <About />

            {/* services */}
            <Services servicesData={servicesData} />
        </div>
    );
};

export default Home;