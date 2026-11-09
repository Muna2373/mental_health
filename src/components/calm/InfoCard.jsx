import React from 'react';
import { Globe } from 'lucide-react';
import './CalmPulse.css';

function InfoCard() {
    return (
        <div className="info-card">
            <div className="info-content-wrapper">
                <Globe size={18} className="info-icon" />
                <div>
                    <h4 className="info-heading">Parasympathetic Pathway Active</h4>
                    <p className="info-text">
                        Prolonged diaphragmatic pauses increase capillary oxygenation. Gentle somatic tingling in fingertips is natural.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;