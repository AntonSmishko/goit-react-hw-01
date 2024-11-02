import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = () => {
    return (
        <ul>
            <li>
                <FriendListItem />
            </li>
        </ul>
    );
};

export default FriendList;

/* Кількість li залежить від кількості об'єктів в масиві */
