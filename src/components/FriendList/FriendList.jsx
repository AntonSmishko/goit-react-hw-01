import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
const FriendList = ({ data }) => {
    return (
        <ul className={css.list}>
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
