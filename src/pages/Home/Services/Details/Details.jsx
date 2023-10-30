import { Link, useLoaderData } from "react-router-dom";


const Details = () => {

    // console.log(user);
    const servicesData = useLoaderData()
    // console.log(servicesData);
    const {_id, serviceName, servicePrice, photoURL, productDescription
        , ratings } = servicesData || {}

        
      
    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >

            <div className="flex gap-5 " >

                {/* image and details */}
                <div className="flex-2" >
                    {/* image */}
                    <div>
                        <img className="w-full lg:h-[640px] rounded-md" src={photoURL} />
                    </div>

                    <div className="space-y-3 my-5" >
                        <h2 className="text-3xl font-semibold text-[#444] dark:text-white">{serviceName}</h2>
                        <p className="dark:text-white">{ratings}</p>
                        <p className="text-justify text-base text-[#737373] dark:text-white" >{productDescription}</p>
                    </div>

                </div>


                {/* Proceed Checkout */}
                <div>

                    <div className="bg-[#151515] dark:bg-white p-4 py-10 rounded-md flex-1 h-[415px] space-y-3" >


                        <div className="flex justify-center" >
                            <img className="w-32" src="https://i.ibb.co/tcgr9Hy/logo.png" alt="" />
                        </div>

                        {/* text */}
                        <div className="text-white  space-y-3 dark:text-[#444]" >
                            <h2 className="text-center text-lg" >Need Help? We Are Here <br />
                                To Help You</h2>

                            <div className="relative" >
                                <div className="bg-white dark:bg-black text-black p-2 w-60 flex justify-center items-center py-10 rounded-md text-lg" >
                                    <div>
                                        <h2 className="dark:text-white"><span className="text-[#FF3811] font-bold " >Car Doctor</span> Special</h2>

                                        <p className="dark:text-white">Save up to 60% off</p>
                                    </div>


                                </div>

                                {/* get a quote */}
                                <div className="bg-[#FF3811] absolute px-6 py-2 text-lg font-semibold rounded-md left-[46px] top-[110px] dark:text-white" >
                                    <h2>Get A Quote</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* price */}
                    <div className="space-y-3 my-3" >
                        <h2 className="text-[#151515] text-3xl font-semibold dark:text-white" >Price: ${servicePrice}</h2>

                        {/* button */}
                        <Link to={`/checkOut/${_id}`} >
                        <button className="bg-[#FF3811] w-full py-2 rounded-md text-white text-lg font-semibold" >
                        Proceed Checkout
                        </button>
                        </Link>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Details;