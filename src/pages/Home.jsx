import HomeHeader from "../components/homepage/HomeHeader.jsx";
import BurnVault from "../components/homepage/BurnVault.jsx";
import MindfulPortals from "../components/homepage/MindfulPortals.jsx";
import "../components/homepage/Home.css";

function Home() {
    return (
        <div className="home_page">
            <HomeHeader/>
            <BurnVault/>
            <MindfulPortals/>
        </div>
    );
}

export default Home;
