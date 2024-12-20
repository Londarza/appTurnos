
import { Link } from 'react-router-dom';
import { CardContainer, Avatar, UserInfo, UserButton } from './UserCardStyle';

const UserCard = ({ user }) => {
    return (
        <CardContainer>
            <Avatar src="/defaultAvatar.jpg" alt="User Avatar" />
            <UserInfo>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </UserInfo>
            <Link to={`/users/${user.id}`}>
                <UserButton>Ver Detalles</UserButton>
            </Link>
        </CardContainer>
    );
};

export default UserCard;
