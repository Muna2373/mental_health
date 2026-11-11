import React from "react";
import { Clock, RefreshCw } from "lucide-react";
import "./CalmPulse.css";

function Breathwidget() {
    return (
        <div className="breathing-container">
            <div className="circle-wrapper">
                <svg className="progress-ring" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="ring-background"
                        strokeWidth="3"
                        fill="transparent"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="ring-progress"
                        strokeWidth="3"
                        strokeDasharray="264"
                        strokeDashoffset="60"
                        strokeLinecap="round"
                        fill="transparent"
                    />
                </svg>

                <div className="circle-content">
                    <span className="state-label">Hold</span>
                    <span className="time-display">2s</span>
                    <div className="remaining-time">
                        <Clock size={12} />
                        <span>04:10 remaining</span>
                    </div>
                </div>
            </div>

            <div className="haptic-info">
                <RefreshCw size={14} className="spin-icon" />
                <span>Haptic pacing synced to vagus pulse</span>
            </div>
        </div>
    );
}

export default Breathwidget;