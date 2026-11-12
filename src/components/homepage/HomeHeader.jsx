import {FiUser} from "react-icons/fi";
import {FaFireFlameCurved} from "react-icons/fa6";

function HomeHeader() {
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
            <h1>Good Morning, <span> Muath </span> </h1>
            <p className="home_description"> Your mind deserves unhurried release.  Take a deep breath</p>
       </div>

    );
}
export default HomeHeader;