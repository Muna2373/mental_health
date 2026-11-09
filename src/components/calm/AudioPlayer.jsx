import React from "react";
import { Volume2, RotateCcw, RotateCw, Pause, Bell, BarChart2 } from "lucide-react";
import "./CalmPulse.css";

function AudioPlayerCard() {
    const bars = [40, 70, 50, 20, 30, 45, 80, 35, 45, 60, 40, 65, 75];

    return (
        <div className="audio-card">
            <div className="audio-header">
                <div className="audio-title-group">
                    <div className="audio-icon-box">
                        <BarChart2 size={20} />
                    </div>
                    <div>
                        <h3 className="audio-title">Soothing Music</h3>
                        <p className="audio-subtitle">
                            <span className="hz-highlight">432Hz</span> · Binaural Ambient
                        </p>
                    </div>
                </div>
                <button className="audio-icon-btn">
                    <BarChart2 size={18} />
                </button>
            </div>

            <div className="visualizer-container">
                <div className="visualizer-bars">
                    {bars.map((height, i) => (
                        <div
                            key={i}
                            style={{ height: `${height}%` }}
                            className={`bar ${i === 6 ? 'peak' : ''}`}
                        />
                    ))}
                </div>
                <div className="visualizer-labels">
                    <span>Sub-Delta 2.5Hz</span>
                    <span>Coherence Peak</span>
                    <span>Theta 7.8Hz</span>
                </div>
            </div>

            <div className="audio-controls">
                <div className="volume-control">
                    <Volume2 size={16} className="control-icon" />
                    <div className="volume-slider">
                        <div className="volume-fill" />
                    </div>
                </div>

                <div className="playback-group">
                    <button className="control-btn">
                        <RotateCcw size={18} />
                    </button>
                    <button className="play-pause-btn">
                        <Pause size={20} fill="currentColor" />
                    </button>
                    <button className="control-btn">
                        <RotateCw size={18} />
                    </button>
                </div>

                <button className="control-btn">
                    <Bell size={18} />
                </button>
            </div>
        </div>
    );
}

export default AudioPlayerCard;