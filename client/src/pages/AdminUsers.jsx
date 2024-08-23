import { useState, useEffect } from "react";
import { useAuth } from "../auth";
import './AdminUsers.css';
import { Link } from "react-router-dom";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth(); // Assuming useAuth provides authorizationToken
    console.log(authorizationToken);

    const getAllUsersData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/users', {
                method: "GET",
                headers: {
                    Authorization: `${authorizationToken}`, // Bearer token format
                },
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `${authorizationToken}`,
                },
            });
            
    
            const responseData = await response.json();
            console.log('Response status:', response.status);
            console.log('Response data:', responseData);
    
            if (!response.ok) {
                throw new Error(responseData.message || 'Failed to delete user');
            }
    
            console.log(`User deleted: ${responseData}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    
        } catch (error) {
            console.log('Error:', error.message);
        }
    }
    
    

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Update User Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 && users.map((curUser, index) => (
                                <tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone}</td>
                                    <td>
                                        <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                                    </td>
                                    <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};
