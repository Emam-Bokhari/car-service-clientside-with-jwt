import PropTypes from "prop-types"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "react-router-dom";

const ServicesCard = ({ data }) => {
    const { _id, serviceName, servicePrice, photoURL } = data || {}
    // console.log(data);
    return (
        <div>

           <Link to={`/details/${_id}`} >
            {/* card */}
            <div className="border-[1px] border-[#E8E8E8] rounded-md p-4 ">

                {/* image */}
                <div>
                    <img className="rounded-md w-full h-[200px] md:h-[250px]" src={photoURL} />
                </div>
                {/* service name and price */}
                <div className="mt-5 space-y-2" >
                    <h2 className="text-[#444] text-2xl font-bold dark:text-white" >{serviceName}</h2>

                    <div className="flex items-center justify-between" >
                        <p className="text-[#FF3811] font-bold text-lg">Price: ${servicePrice}</p>

                       
                        <div className="text-[#FF3811] text-2xl font-semibold" >
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </div>
            </div>
           </Link>
        </div>
    );
};

ServicesCard.propTypes = {
    data: PropTypes.object
}

export default ServicesCard;