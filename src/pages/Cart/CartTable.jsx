

const CartTable = ({data}) => {
    // console.log(data);
    const {_id,customerName,date,photoURL,serviceName,servicePrice}=data||{}
    // console.log(_id);
    const handleConfirm=(_id)=>{
        fetch(`http://localhost:3000/booking/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'Confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div >
            
            <div className="grid grid-cols-6 text-center" >
               
                
                <p className="border-b-[1px] border-black" >{customerName}</p>
                
                <p className="border-b-[1px] border-black">{date}</p>
                <div className="flex justify-center  border-b-[1px] border-black" >
                <img className="w-24 h-24" src={photoURL} alt="" />
                </div>
                <p className="border-b-[1px] border-black">{serviceName}</p>
                <p className="border-b-[1px] border-black">{servicePrice}</p>
                <div className="border-b-[1px] border-black">
                <button onClick={()=>handleConfirm(_id)} className="bg-red-500 px-3 py-1 rounded text-lg text-white">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default CartTable;