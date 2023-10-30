
const AddServices = () => {
    const handleaddService=(event)=>{
        event.preventDefault()
        const form=event.target 
        const serviceName=form.serviceName.value
        const servicePrice=form.servicePrice.value
        const photoURL=form.photoURL.value
        const ratings=form.ratings.value
        const productDescription=form.productDescription.value
        const service={serviceName,servicePrice,photoURL,ratings,productDescription}
        console.log(service);

        // reset form
        form.reset()
        fetch("http://localhost:3000/servicesData",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('add service')
            }
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
                    <h2 className="text-3xl lg:text-4xl font-semibold" >Add New Services</h2>
                </div>
            </div>

            {/* services form */}
            <form onSubmit={handleaddService} className="bg-[#F3F3F3] px-6 py-10 space-y-5" >

                <div>
                    {/* Service name and services price */}
                    <div className="flex gap-5" >
                        {/* Services Name */}
                        <div className="flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="serviceName" placeholder="Service Name" />
                        </div>

                        {/* Services Price */}
                        <div className=" flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="number" name="servicePrice" placeholder="Service Price" />
                        </div>
                    </div>
                </div>



                {/* image and rating */}
                <div>
                    <div className="flex gap-5" >
                        {/* image */}
                        <div className=" flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="photoURL" placeholder="Photo URL" />
                        </div>

                        {/* ratings */}
                        <div className="flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="number" name="ratings" placeholder="Ratings" />
                        </div>
                    </div>
                </div>

                {/* product description */}
                <div>
                    <textarea className="w-full h-48 p-2 resize-none rounded-md outline-[#FF3811]" name="productDescription" placeholder="Product Description"></textarea>
                </div>

                <div>
                    <input className="bg-[#FF3811] w-full py-3 text-white font-semibold rounded-md cursor-pointer" type="submit" value="Submit" />
                </div>

            </form>

        </div>
    );
};

export default AddServices;