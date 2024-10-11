import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';
import UserDetails from './UserDetails';
import { isUserFromFanCode } from '../utils/location';
import { Card, Spinner } from 'react-bootstrap';

const UserList = () => {
    // inital state of users i.e empty
    const [users, setUsers] = useState([]);
    // to show a loading state
    const [loading, setLoading] = useState(true);
    //to handle errors
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try{
                // gets all the users
                const allUsers = await getUsers();
                // filters users based on whether they belong to FanCode city
                const fancodeUsers = allUsers.filter(user => isUserFromFanCode(user));
                setUsers(fancodeUsers);
            }catch(err){
                setError("Failed to load users.");
            }finally{
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">FanCode Users</h2>

            {loading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" variant="primary" />
                    <span className="ms-2">Loading users...</span>
                </div>
            ) : error ? (
                <div className="alert alert-danger text-center">
                    {error}
                </div>
            ) : users.length ? (
                users.map(user => (
                    // shows the information about the users
                    <Card key={user.id} className="mb-3 shadow-sm">
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text><strong>Username:</strong> {user.username}</Card.Text>
                            <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
                            <Card.Text><strong>City:</strong> {user.address.city}</Card.Text>
                            
                            {/* brings the users todo from "components/UserDetails.js" */}
                            <UserDetails userId={user.id} />
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <div className="alert alert-info text-center">
                    No users found from FanCode city.
                </div>
            )}
        </div>
    );
};

export default UserList;
