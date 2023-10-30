import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
    const checkoutData = useLoaderData()
    // console.log(checkoutData);
    const { serviceName, servicePrice, photoURL } = checkoutData
    const {user}=useContext(AuthContext)

    const handleConfirmOrder=(event)=>{
        event.preventDefault()
        const form=event.target 
        const name=form.name.value 
        const email=form?.email.value 
        const serviceName=form.serviceName.value
        const servicePrice=form.servicePrice.value 
        const photoURL=form.photoURL.value
        const date=form.date.value 
        
        const order={
            customerName:name,
            email,
            serviceName,
            servicePrice,
            photoURL,date
        }
        console.log(order);

        fetch("http://localhost:3000/booking",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >


            <div className="relative my-10" >

                {/* image */}
                <div>
                    <img className="w-full" src="https://i.ibb.co/LpDtjCc/checkout.png" />
                </div>

                {/* overlay */}
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] rounded-md inset-0 absolute" ></div>

                <div className="absolute top-20 lg:top-28 text-white left-20 " >
                    <h2 className="text-3xl lg:text-4xl font-semibold" >Checkout</h2>
                </div>
            </div>

            {/* services form */}
            <form onSubmit={handleConfirmOrder} className="bg-[#F3F3F3] px-6 py-10 space-y-5" >

                <div>


                    {/* user name and email */}
                    <div>
                        <div className="flex gap-5" >
                            {/* name */}
                            <div className=" flex-1" >
                                <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="name" placeholder="User Name" defaultValue={user?.displayName} />
                            </div>

                            {/* email */}
                            <div className="flex-1" >
                                <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="email" placeholder="Email" defaultValue={user?.email} />
                            </div>
                        </div>
                    </div>

                    {/* Service name and services price */}
                    <div className="flex gap-5 my-5" >
                        {/* Services Name */}
                        <div className="flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="serviceName" placeholder="Service Name" defaultValue={serviceName}/>
                        </div>

                        {/* Services Price */}
                        <div className=" flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="number" name="servicePrice" placeholder="Service Price" defaultValue={servicePrice} />
                        </div>
                    </div>
                </div>



                {/* image and email */}
                <div>
                    <div className="flex gap-5" >
                        {/* image */}
                        <div className=" flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="photoURL" placeholder="Photo URL" defaultValue={photoURL} />
                        </div>

                        {/* email */}
                        <div className="flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="date" name="date" placeholder="Date" />
                        </div>
                    </div>
                </div>


                <div>
                    <input className="bg-[#FF3811] w-full py-3 text-white font-semibold rounded-md cursor-pointer" type="submit" value="Confirm Order" />
                </div>

            </form>
        </div>
    );
};

export default CheckOut;