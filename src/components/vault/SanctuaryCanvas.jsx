import { FiLock, FiRotateCcw } from 'react-icons/fi';
import { FaFireFlameCurved } from "react-icons/fa6";

export default function SanctuaryCanvas({ text, setText }) {
    return (
        <div className="canvas-card">
            <div className="canvas-header">
                <div className="canvas-title-group">
                    <span><FaFireFlameCurved></FaFireFlameCurved></span>
                    <span className="canvas-title-text">UNFILTERED SANCTUARY CANVAS</span>
                </div>
                <span className="canvas-char-count">{text.length} chars / Dissolvable</span>
            </div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What feels too heavy to carry right now? Spill it raw. It will not stay."
                rows={5}
                className="sanctuary-textarea"
            />

            <div className="canvas-footer">
                <div className="encryption-info">
                    <FiLock />
                    <span>Client-side ephemeral encryption</span>
                </div>

                <button onClick={() => setText('')} className="reset-btn">
                    <FiRotateCcw /> Reset
                </button>
            </div>
        </div>
    );
}