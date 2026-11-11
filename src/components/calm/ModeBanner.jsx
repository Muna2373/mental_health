import React from "react";
import "./CalmPulse.css";

function ModeBanner() {
    return (
        <div className="mode-banner-container">
            <div className="status-badge">
                <span className="status-dot" />
                <span className="mode-highlight">SOMATIC BREATHWORK</span>
                <span className="mode-subtext">· Coherence Mode</span>
            </div>
            <p className="subtitle">
                Sync diaphragm with ambient frequency guide
            </p>
        </div>
    );
}

export default ModeBanner;