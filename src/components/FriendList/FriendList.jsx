import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ data }) => {
    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>
                    <FriendListItem
                        isOnline={item.isOnline}
                        name={item.name}
                        avatar={item.avatar}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;

/* Кількість li залежить від кількості об'єктів в масиві */
