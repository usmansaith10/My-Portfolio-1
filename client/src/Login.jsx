import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import { toast } from 'react-toastify';

export const Login = () => {
    const [user, setUser] = useState({
        email: "" ,
        password: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        if (user.password.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            
            const data = await response.json(); // Parse JSON response

            if (response.ok) {
                toast.success("Successfully Logged In");
                setUser({ email: "", password: "" });
                storeTokenInLS(data.token)
                navigate("/");
            } else {
               toast.error("Invalid Email or Password");
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("An error occurred during login");
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="/images/login.png"
                                alt="Login"
                                width="600"
                                height="400"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb3">Login Form</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
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
                                <div className="form-group">
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
                                <button type="submit" className="btn btn-submit">
                                    Login Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};
