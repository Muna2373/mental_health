import TopNav from "../components/common/TopNav.jsx";
import ModeBanner from "../components/calm/ModeBanner.jsx";
import Breathwidget from "../components/calm/Breathwidget.jsx";
import MatricsDashboard from "../components/calm/MatricsDashboard.jsx";
import AudioPlayer from "../components/calm/AudioPlayer.jsx";
import InfoCard from "../components/calm/InfoCard.jsx";

function CalmPulse() {
    return (
        <div className="page-shell">
           <TopNav/>
            <ModeBanner/>
            <Breathwidget/>
            <MatricsDashboard/>
            <AudioPlayer/>
            <InfoCard/>

        </div>
    );
}

export default CalmPulse;