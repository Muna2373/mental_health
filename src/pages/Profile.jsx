import TopNav from "../components/common/TopNav.jsx";
import ProfilePage from "../components/profile/ProfilePage.jsx";

function Profile() {
    return (
        <div className="page-shell">
            <TopNav/>
            <ProfilePage/>
        </div>
    );
}

export default Profile;