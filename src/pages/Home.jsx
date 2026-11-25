import HomeHeader from "../components/homepage/HomeHeader.jsx";
import BurnVault from "../components/homepage/BurnVault.jsx";
import MindfulPortals from "../components/homepage/MindfulPortals.jsx";
import styles from "../components/homepage/Home.module.css";

function Home() {
    return (
        <div className={styles.home_page}>
            <HomeHeader/>
            <BurnVault/>
            <MindfulPortals/>
        </div>
    );
}

export default Home;
