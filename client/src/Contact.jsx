import React, { useState } from "react";
import { useAuth } from "./auth";
import { toast } from 'react-toastify';

const defaultContactForm = {
    username: "",
    email: "",
    message: "",
};

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactForm);
    const { user } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleContactForm = async (e) => {
        e.preventDefault();

        try {
            console.log("Sending data:", contact); // Log the contact data before sending
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            console.log("Response status:", response.status); // Log the response status
            console.log("Response ok:", response.ok); // Log if the response is ok

            if (response.ok) {
                const data = await response.json();
                console.log("Response data:", data); // Log the response data

                setContact(defaultContactForm);
                toast.success("Message sent successfully"); // Correct the alert message
            } else {
                const errorData = await response.json(); // Log the error details from the response
                console.error("Error details:", errorData);
                toast.error("Message not sent");
            }
        } catch (error) {
            console.error("Fetch error:", error); // Log the fetch error
            toast.warning("Message not sent");
        }
    };

    return (
        <>
            <section className="section-about">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>

                <div className="container grid grid-two-cols">
                    <div className="contact-image">
                        <img
                            src="/images/contact us.webp"
                            alt="We are always ready to help you"
                        />
                    </div>
                    <section className="contact-form">
                        <form onSubmit={handleContactForm}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    required
                                    value={contact.message}
                                    onChange={handleInput}
                                    cols={40}
                                    rows={5}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>
    );
};
