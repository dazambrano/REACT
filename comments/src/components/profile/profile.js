const Profile = ({name, email}) => {
    return <div className="box_profile">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" height="50" />
        <div>
            <h2>{name}</h2>
            <span className="email">{email}</span>
        </div>
    </div>
}

export default Profile;