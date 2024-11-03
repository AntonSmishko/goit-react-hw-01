const FriendListItem = ({ isOnline, name, avatar }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? 'Online' : 'Ofline'}</p>
        </div>
    );
};

export default FriendListItem;
