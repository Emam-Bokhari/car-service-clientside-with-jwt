import { useContext } from "react";
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";

const Login = () => {
    const { signin, googleSignin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location);
    const handlelogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email,password);

        signin(email, password)
            .then(result => {
                const loggedinUser=result.user
                console.log(loggedinUser);
                const user={email}
              
                // navigate(location?.state ? location?.state : "/")
               axios.post("http://localhost:3000/jwt",user,{withCredentials:true})
               .then(res=>{
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : "/")
                }
               })
               

            })
            .catch(error => {
                console.log(error);
            })




    }

    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : "/")
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
                    <form onSubmit={handlelogin} className="space-y-10" >
                        <h2 className="text-center text-[#444] font-semibold text-3xl dark:text-white" >Login</h2>

                        <div className="space-y-4" >
                            {/* email */}
                            <div className="space-y-2" >
                                <p>Email</p>
                                <input className="border-[1px] border-[#E8E8E8] rounded-md p-2 w-full" type="email" name="email" placeholder="Your email" required />
                            </div>

                            {/* password */}
                            <div className="space-y-2" >
                                <p>Password</p>
                                <input className="border-[1px] border-[#E8E8E8] rounded-md p-2 w-full" type="password" name="password" placeholder="Your password" required />
                            </div>

                            {/* signin button */}
                            {/* password */}
                            <div>
                                <input className="bg-[#FF3811] text-white font-semibold text-lg rounded-md p-2 w-full" type="submit" value="Signin" />
                            </div>

                            {/* social login */}
                            <div className="space-y-3" >
                                <h2 className="text-center dark:text-white" >Or Signin With</h2>

                                <div onClick={handleGoogleSignin} className="bg-white border-[1px] border-[#E8E8E8] rounded-md p-2 flex items-center gap-2 justify-center ">

                                    <div className="text-2xl" >
                                        <FcGoogle />
                                    </div>

                                    <div>
                                        <input className=" text-[#444] font-bold text-lg  w-full" type="submit" value="Google" />
                                    </div>

                                </div>
                            </div>

                            <div>
                                <h2 className="text-center dark:text-white" >Don&#39;t have an account? <Link to="/signUp" ><span className="text-[#FF3811] font-semibold  text-base" >SignUp</span></Link></h2>
                            </div>


                        </div>
                    </form>
                </div>
            </div>





        </div>
    );
};

export default Login;