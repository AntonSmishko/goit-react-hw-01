import css from './FriendListItem.module.css';
const FriendListItem = ({ isOnline, name, avatar }) => {
    return (
        <div className={css.wrapper}>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={isOnline ? css.online : css.ofline}>
                {isOnline ? 'Online' : 'Ofline'}
            </p>
        </div>
    );
};

export default FriendListItem;
