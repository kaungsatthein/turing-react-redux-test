interface ProfileData {
    readonly name: string;
    readonly image: string;
}

const Profile = ({ profile }: { profile: ProfileData }) => {
    return (
        <div>Profile Data
            <h1>{profile.name}</h1>
            <img src={profile.image} alt={profile.name} />
        </div>
    )
}
export default Profile
