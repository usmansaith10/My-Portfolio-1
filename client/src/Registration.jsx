import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { toast } from 'react-toastify';



export const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate phone number length
        if (user.phone.length < 10) { // Adjust the length as needed
            toast.error("Phone number must be at least 10 digits long");
            return;
        }

        // Additional validation can be added here if needed

        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();
            console.log('response from server', data.extraDetails);
            

            if (response.ok) {
                storeTokenInLS(data.token);
                setUser({ username: "", email: "", phone: "", password: "" });
                toast.success("Successfully Registered");
                navigate("/login");
            } else {
               toast.error(data.extraDetails ? data.extraDetails: data.message);
            }
        } catch (error) {
            console.error("Registration Error:", error);
            toast.error("An error occurred during registration");
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/reg.png" alt="Registration" width="600" height="400" />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb3">Registration Form</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};
