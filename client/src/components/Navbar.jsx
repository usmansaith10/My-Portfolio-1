import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { useAuth } from "../auth";

export const Navbar = ()=>{
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn);
    
    return <>
    <header>
        <div className="container">
            <div className="logo_brand">
                <NavLink to =""> MyCompany </NavLink>
            </div>
            <nav>

                <ul>
                    <li> <NavLink to ="/">Home</NavLink></li>
                    <li> <NavLink to ="/about">About</NavLink></li>
                    <li> <NavLink to ="/contact">Contact</NavLink></li>
                    <li> <NavLink to ="/services">Services</NavLink></li>
                    { isLoggedIn ? (<li className="logout" > <NavLink to = "Logout">Logout</NavLink></li>) : (<>
                        <li> <NavLink to ="/registration">Registration</NavLink></li>
                        <li> <NavLink to ="/login">Login</NavLink></li>
                    </>)}
                    
                </ul>
            </nav>
        </div>
    </header>
    
    </>
}