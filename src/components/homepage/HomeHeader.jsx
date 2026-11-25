import {FiUser} from "react-icons/fi";
import {FaFireFlameCurved} from "react-icons/fa6";
import {useAuth} from "../../context/authContext.js";
import styles from "./Home.module.css";

function HomeHeader({user}) {
    const { user: authUser } = useAuth();
    const activeUser = user || authUser;
    const displayName = activeUser?.name || "Member";

    return (
        <div className={styles.home_header}>
            <div className={styles["profile-avatar-large"]}>
                <FiUser/>
            </div>
            <div className={styles.streak_badge}>
                <FaFireFlameCurved/> 2 Days
            </div>
            <h1>Good Morning, <span> {displayName} </span></h1>
            <p className={styles.home_description}> Your mind deserves unhurried release. Take a deep breath</p>
        </div>

    );
}
export default HomeHeader;