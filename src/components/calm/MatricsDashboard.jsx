import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import "./CalmPulse.css";

function MatricsDashboard() {
    return (
        <div className="metrics-grid">
            <div className="metric-card">
                <div className="metric-header">
                    <span>HRV BALANCE</span>
                    <span className="trend-up">
                        <TrendingUp size={12} /> +8%
                    </span>
                </div>
                <div className="metric-value-row">
                    <span className="metric-number">92</span>
                    <span className="metric-unit">ms</span>
                </div>
                <div className="metric-footer">
                    <span className="dot-emerald" />
                    <span>Autonomic Coherence</span>
                </div>
            </div>

            <div className="metric-card">
                <div className="metric-header">
                    <span>SOMATIC LOAD</span>
                    <span className="trend-down">
                        <TrendingDown size={12} /> 24%
                    </span>
                </div>
                <div className="metric-value-row">
                    <span className="metric-number cyan">Low</span>
                    <span className="metric-unit">Tier I</span>
                </div>
                <div className="metric-footer">
                    <span className="dot-cyan" />
                    <span>Cortisol down-shift</span>
                </div>
            </div>
        </div>
    );
}

export default MatricsDashboard;