import { NavLink } from "react-router-dom"
import "./Footer.css";

export const Footer = ()=>{
    return <>
    <footer className="site-footer">
    <div className="container">
        <p>&copy; 2024 My Company. All rights reserved.</p>
        <ul className="footer-links">
            <li> <NavLink to="/privacy-policy" onClick={() => handleNavigate('/privacy-policy')}>Privacy Policy</NavLink></li>
                <li><NavLink to="/terms-of-service" onClick={() => handleNavigate('/terms-of-service')}>Terms of Service</NavLink></li>
            <li><NavLink to="/contact" onClick={() => window.location.href = '/contact'}>Contact</NavLink></li>

        </ul>
    </div>
</footer>
</>
}


