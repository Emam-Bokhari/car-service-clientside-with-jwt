import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from './../../AuthProvider/AuthProvider';

const Navbar = () => {
    const [mode, setMode] = useState('light');

    const { user, logout } = useContext(AuthContext)
    const changeTheme = () => {
        const html = document.documentElement;
        if (mode === "light") {
            html.classList.remove("light");
            html.classList.add("dark");
            setMode('dark'); // Updated to set 'dark' here
            localStorage.setItem("mode", "dark")
        } else {
            html.classList.remove("dark");
            html.classList.add("light");
            setMode('light'); // Updated to set 'light' here
            localStorage.setItem("mode", "light")
        }
    };

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light"
        document.documentElement.classList.add(currentMode)
        setMode(currentMode)
    }, [])

    const handleLogout = () => {
        logout()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // const email = user && user.email
    // console.log(email);

    return (
        <div>
            <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10">
                <nav className="flex items-center justify-between">
                    {/* logo */}
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    {/* navlink */}
                    <ul className="flex gap-5 font-semibold text-[#444] text-lg dark:text-white">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/addServices">Add Services</Link></li>
                        <li><Link to="/addProducts">Add Products</Link></li>
                        <li><Link to="/addTeams">Add Teams</Link></li>
                    </ul>

                    {/* icon and button */}
                    <div className="flex items-center gap-5">
                        {/* light and dark mode */}
                        <div onClick={changeTheme} className="text-2xl">
                            {mode === "light" ? <MdOutlineModeNight /> : <div className="dark:text-white" ><MdOutlineLightMode /></div>}
                        </div>

                        {/* shopping icon */}
                        {user?.email && <div className="text-2xl dark:text-white">
                            <Link to={`/cart`}><BiShoppingBag /></Link>
                        </div>}

                        {/* search icon */}
                        <div className="text-2xl dark:text-white">
                            <BiSearch />
                        </div>

                        {/* appointment button */}
                        <div>
                            {user ? <div>
                                <button onClick={handleLogout} className="border-[1px] border-[#FF3811] rounded-md px-4 py-2 text-[#FF3811] font-semibold text-lg">Logout</button>
                            </div> : <div>
                                <Link to="/login">
                                    <button className="border-[1px] border-[#FF3811] rounded-md px-4 py-2 text-[#FF3811] font-semibold text-lg">Login</button>
                                </Link>
                            </div>}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
