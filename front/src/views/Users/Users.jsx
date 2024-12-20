import UserList from '../../components/UserList/userList';
import { UsersContainer } from './UsersStyle';

const Users = () => {
    return (
        <UsersContainer>
            <h1>Usuarios</h1>
            <UserList />
        </UsersContainer>
    );
};

export default Users;