import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

const SignUp = () => {
    const [show, setShow] = useState(false)
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        // check password length
        if (password.length < 6) {
            return alert('Password mustbe 6 charecters or too long')
        }
        // check one capital letter
        else if (!/[A-Z]/.test(password)) {
            return alert('Please make sure your password mustbe include one capital letter')
        }
        // check one special charecer
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|'"\-=]/.test(password)) {
            return alert('Please mustbe provide one special charecter.')
        }



        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >

            <div className="flex gap-5 justify-center items-center" >

                {/* image */}
                <div className="w-[440px]" >
                    <img className="dark:rounded-md" src="https://i.ibb.co/c359hpZ/login.jpg" />
                </div>

                {/* login form */}
                <div className="border-[1px] border-[#D0D0D0] rounded-lg p-10 w-[440px]" >
                    <form onSubmit={handleSignUp} className="space-y-10" >
                        <h2 className="text-center text-[#444] font-semibold text-3xl dark:text-white" >SignUp</h2>

                        <div className="space-y-4" >
                            {/* name */}
                            <div className="space-y-2" >
                                <p>Name</p>
                                <input className="border-[1px] border-[#E8E8E8] rounded-md p-2 w-full" type="text" name="name" placeholder="Your name" required />
                            </div>

                            {/* email */}
                            <div className="space-y-2" >
                                <p>Email</p>
                                <input className="border-[1px] border-[#E8E8E8] rounded-md p-2 w-full" type="email" name="email" placeholder="Your email" required />
                            </div>

                            {/* password */}
                            <div className="space-y-2" >
                                <p>Password</p>
                                <div className="flex justify-end items-center" >
                                    <input className="border-[1px] border-[#E8E8E8] rounded-md p-2 w-full" type={show ? "text" : "password"} name="password" placeholder="Your password" required />

                                    <span className="absolute p-2" onClick={() => setShow(!show)} >

                                        {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}

                                    </span>
                                </div>




                            </div>

                            {/* signin button */}
                            {/* password */}
                            <div>
                                <input className="bg-[#FF3811] text-white font-semibold text-lg rounded-md p-2 w-full" type="submit" value="SignUp" />
                            </div>



                            <div>
                                <h2 className="text-center dark:text-white" >Have an account? <Link to="/login" ><span className="text-[#FF3811] font-semibold  text-base" >Login</span></Link></h2>
                            </div>


                        </div>
                    </form>
                </div>
            </div>





        </div>
    );
};

export default SignUp;