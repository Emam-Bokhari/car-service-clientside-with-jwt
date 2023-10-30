import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartTable from "./CartTable";
import axios from "axios";




const Cart = () => {

    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])

    const url=`http://localhost:3000/booking?email=${user.email}`

    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setBookings(res.data)
        })
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>{
        //     setBookings(data)
            // console.log(data);
        // })
    },[url])
    // console.log(bookings);

    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10  " >

            {/* table */}
           
           <div className="grid grid-cols-6 border-2 border-cyan-300 bg-cyan-800 text-white text-center" >
           
            <p className="py-3 px-6">Name</p>
            <p className="py-3 px-6">Date</p>
            <p className="py-3 px-6">Photo</p>
            <p className="py-3 px-6">Service</p>
            <p className="py-3 px-6">Price</p>
            <p className="py-3 px-6">Status</p>
           </div>

         
          {bookings?.map((item,index)=><CartTable key={index} data={item}  />)}
          

        </div>
    );
};

export default Cart;