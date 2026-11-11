import TopNav from "../components/calm/TopNav.jsx";
import ModeBanner from "../components/calm/ModeBanner.jsx";
import Breathwidget from "../components/calm/Breathwidget.jsx";
import MatricsDashboard from "../components/calm/MatricsDashboard.jsx";
import AudioPlayer from "../components/calm/AudioPlayer.jsx";
import InfoCard from "../components/calm/InfoCard.jsx";

function CalmPulse() {
    return (
        <div>
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