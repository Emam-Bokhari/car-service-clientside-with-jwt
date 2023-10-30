const About = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >

            <div className="flex gap-10 items-center" >

                {/* image */}
                    <div  className=" flex-1"  >
                        <img className="rounded-md  h-[473px]" src="https://i.ibb.co/r5ZpwjN/person.jpg" />
                    </div>

                {/* text */}
                <div className=" flex-1 space-y-5 " >
                    <h2 className="text-[#FF3811] font-bold text-xl" >About Us</h2>
                    <h2 className="font-semibold text-4xl dark:text-white" >We are qualified & of experience in this field</h2>

                    <div className="space-y-4 dark:text-white" >
                        <p className="text-base font-normal" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>

                        <p className="text-base font-normal" >the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    </div>

                    {/* button */}
                    <div>
                        <button className="bg-[#FF3811] px-5 py-3 rounded-md text-lg font-semibold text-white" >Get More Info</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;