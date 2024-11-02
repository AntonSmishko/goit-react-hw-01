/* eslint-disable no-irregular-whitespace */
const Profile = ({ name, tags, location, image, stats }) => {
    return (
        <div>
            <div>
                <img src={image} alt="User avatar" />
                <p>{name}</p>
                <p>{tags}</p> <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
