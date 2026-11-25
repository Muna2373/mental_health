import { useState, useRef } from "react";
import { Volume2, VolumeX, RotateCcw, RotateCw, Pause, Play, Bell, BarChart2 } from "lucide-react";
import styles from "./CalmPulse.module.css";

function AudioPlayerCard() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.66);
    const [isMuted, setIsMuted] = useState(false);

    const audioRef = useRef(null);

    const bars = [40, 70, 50, 20, 30, 45, 80, 35, 45, 60, 40, 65, 75];

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const skipTime = (seconds) => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime + seconds);
    };

    const handleVolumeChange = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newVolume = Math.max(0, Math.min(1, clickX / rect.width));

        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            audioRef.current.muted = false;
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className={`${styles["audio-card"]} ${isPlaying ? styles.playing : ''}`}>
            <audio
                ref={audioRef}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                loop
                onEnded={() => setIsPlaying(false)}
            />

            <div className={styles["audio-header"]}>
                <div className={styles["audio-title-group"]}>
                    <div className={styles["audio-icon-box"]}>
                        <BarChart2 size={20} />
                    </div>
                    <div>
                        <h3 className={styles["audio-title"]}>Soothing Music</h3>
                        <p className={styles["audio-subtitle"]}>
                            <span className={styles["hz-highlight"]}>432Hz</span> · Binaural Ambient
                        </p>
                    </div>
                </div>
                <button className={styles["audio-icon-btn"]}>
                    <BarChart2 size={18} />
                </button>
            </div>

            <div className={styles["visualizer-container"]}>
                <div className={styles["visualizer-bars"]}>
                    {bars.map((height, i) => (
                        <div
                            key={i}
                            style={{
                                height: isPlaying ? `${height}%` : "15%",
                                transition: "height 0.3s ease"
                            }}
                            className={`${styles.bar} ${i === 6 ? styles.peak : ''}`}
                        />
                    ))}
                </div>
                <div className={styles["visualizer-labels"]}>
                    <span>Sub-Delta 2.5Hz</span>
                    <span>Coherence Peak</span>
                    <span>Theta 7.8Hz</span>
                </div>
            </div>

            <div className={styles["audio-controls"]}>
                <div className={styles["volume-control"]}>
                    <button
                        onClick={toggleMute}
                        className={styles["control-btn"]}
                        style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}
                    >
                        {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <div
                        className={styles["volume-slider"]}
                        onClick={handleVolumeChange}
                        style={{ cursor: "pointer" }}
                    >
                        <div
                            className={styles["volume-fill"]}
                            style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                        />
                    </div>
                </div>

                <div className={styles["playback-group"]}>
                    <button onClick={() => skipTime(-10)} className={styles["control-btn"]} title="Rewind 10s">
                        <RotateCcw size={18} />
                    </button>
                    <button onClick={togglePlay} className={styles["play-pause-btn"]}>
                        {isPlaying ? (
                            <Pause size={20} fill="currentColor" />
                        ) : (
                            <Play size={20} fill="currentColor" style={{ marginLeft: "2px" }} />
                        )}
                    </button>
                    <button onClick={() => skipTime(10)} className={styles["control-btn"]} title="Forward 10s">
                        <RotateCw size={18} />
                    </button>
                </div>

                <button className={styles["control-btn"]}>
                    <Bell size={18} />
                </button>
            </div>
        </div>
    );
}

export default AudioPlayerCard;