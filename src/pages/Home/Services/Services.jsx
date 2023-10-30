import ServicesCard from "./ServicesCard/ServicesCard";
import PropTypes from "prop-types"

const Services = ({ servicesData }) => {
    // console.log(servicesData);
    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >

            {/* text */}
            <div className="space-y-2" >
                <h2 className="text-center text-xl text-[#FF3811] font-bold" >Service</h2>

                <h2 className="text-center text-3xl font-semibold dark:text-white" >Our Service Area</h2>

                <div className="text-center  flex justify-center w-[600px] mx-auto dark:text-white"  >
                    <p className="text-base ">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                </div>
            </div>

            {/* card */}
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
                {servicesData?.map((item, index) => <ServicesCard key={index} data={item} />)}
            </div>




        </div>
    );
};

Services.propTypes={
    servicesData:PropTypes.array
}

export default Services;