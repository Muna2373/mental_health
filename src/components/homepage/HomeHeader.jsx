import {FiUser} from "react-icons/fi";
import {FaFireFlameCurved} from "react-icons/fa6";

function HomeHeader({user}) {
    const storedRaw = localStorage.getItem("user") || sessionStorage.getItem("user");
    let storedUser = null;

    if (storedRaw) {
        try {
            storedUser = JSON.parse(storedRaw);
        } catch {
            storedUser = null;
        }
    }

    const activeUser = user || storedUser;
    const displayName = activeUser?.name || "Member";

    return (
        <div className="home_header">
            <div className="profile-avatar-large">
                <FiUser/>
                {/*<h2> 3M Sanctuary </h2>
                <p className="first_paragraph"> Mind state: Releasing tension</p>*/}
            </div>
            <div className="streak_badge">
                <FaFireFlameCurved/> 2 Days
            </div>
            <h1>Good Morning, <span> {displayName} </span></h1>
            <p className="home_description"> Your mind deserves unhurried release. Take a deep breath</p>
        </div>

    );
}
export default HomeHeader;