import { useState, useEffect } from "react";
import { useAuth } from "../auth";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export const AdminUpdate = () => {
    
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const { authorizationToken } = useAuth();

    useEffect(() => {
        const getSingleUserData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `${authorizationToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        getSingleUserData();
    }, [params.id, authorizationToken]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // to handle user data update

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${authorizationToken}`,
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            toast.success('User updated successfully');
        } catch (error) {
            console.log(error);
            toast.error('Error updating user');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <div className="section-contact">
                <h1 className="main-heading">Update User Data</h1>
            </div>
            <section className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            required
                            autoComplete="off"
                            value={data.username}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            autoComplete="off"
                            value={data.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            autoComplete="off"
                            value={data.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit">Update User</button>
                    </div>
                </form>
            </section>
        </section>
    );
};
