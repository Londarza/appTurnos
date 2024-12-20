import  { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import { UserListContainer } from './userListStyle';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <UserListContainer>
            {users.length > 0 ? (
                users.map((user) => <UserCard key={user.id} user={user} />)
            ) : (
                <p>No se encontraron usuarios.</p>
            )}
        </UserListContainer>
    );
};

export default UserList;
