import { useState, useEffect } from "react";
import { useAuth } from "../auth";
import './AdminContacts.css';
import { toast } from 'react-toastify';

export const AdminContacts = () => {
    const { authorizationToken } = useAuth();
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getContactsData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contact", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch contacts data");
            }

            const data = await response.json();
            setContacts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const deleteContactById = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contact/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            if (response.ok) {
                getContactsData(); // Refresh contacts after deletion
                toast.success('Contact deleted successfully');
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete contact');
            }
        } catch (error) {
            console.error("Error deleting contact:", error.message);
            toast.error(`Error deleting contact: ${error.message}`);
        }
    }

    useEffect(() => {
        getContactsData();
    }, []);

    if (loading) {
        return <h3>Loading contacts...</h3>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <>
            <h1>Contact Page</h1>
            <div className="contacts-container">
                {contacts.map((curContact, index) => (
                    <div className="contact-item" key={index}>
                        <p className="contact-username">{curContact.username}</p>
                        <p className="contact-email">{curContact.email}</p>
                        <p className="contact-message">{curContact.message}</p>
                        <button
                            className="delete-button"
                            onClick={() => deleteContactById(curContact._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};
