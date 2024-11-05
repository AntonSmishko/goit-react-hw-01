/* eslint-disable no-irregular-whitespace */
import Profile from './Profile/Profile';
import '../index.css';
import 'modern-normalize';
import userData from '../assets/userData.json';
import FriendList from './FriendList/FriendList';
import friendsData from '../assets/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionHistory from '../assets/transactionHistory.json';
const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />

            <FriendList data={friendsData} />

            <TransactionHistory data={transactionHistory} />
        </>
    );
};
export default App;
