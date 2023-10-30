
import img5 from "../../../assets/banner/5.jpg"


const Banner = () => {

    return (

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >
          <div className="relative" >




{/* slider */}
<div>
    <img className="w-full lg:h-[700px] rounded-md " src={img5}  />
</div>

<div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[#15151500] rounded-md"></div>

{/* text */}
<div className="absolute top-0 space-y-1 text-white w-full left-0" >

    <div className="flex items-center pl-20 md:h-[50vh] lg:h-[60vh]" >
      <div className="space-y-5" >
      <h2 className="text-4xl font-bold ">Affordable <br /> Price For Car Servicing</h2>

<p className="text-lg font-normal" >There are many variations of passages of  available, but the majority have suffered <br /> alteration in some form</p>

{/* button */}
<div className="flex gap-5 font-semibold" >
    <button className="bg-[#FF3811] px-3 py-2 rounded-md text-lg" >
        Discover More
    </button>

    <button className="border-[1px] border-white px-3 py-2 rounded-md text-lg" >
        Discover More
    </button>

</div>
      </div>
    </div>


</div>
</div>
      </div>
    );
};

export default Banner;