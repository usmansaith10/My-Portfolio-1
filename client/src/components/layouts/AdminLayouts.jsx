import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { useAuth } from "../../auth";

export const AdminLayout = () => {
    const { user = {}, isLoading } = useAuth(); // Default user to an empty object
    const theUser = useAuth();
    console.log(theUser, 'theUser');

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    // if (!user.isAdmin) {
    //     return <Navigate to="/" />;
    // }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"> <FaUser /> Users </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"> <MdContacts /> Contact </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services"> <MdMiscellaneousServices /> Services </NavLink>
                            </li>
                            <li>
                                <NavLink to="/"> <IoMdHome /> Home </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Outlet />
            </header>
        </>
    );
};