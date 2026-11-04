import { GiYinYang } from "react-icons/gi";


export default function SplashScreen({ onStart }) {
    return (
        <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}> <GiYinYang/></div>
            <h1>Take a deep breath...</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Let it go into the void.</p>

            <div style={{ width: '80%' }}>
                <button className="btn-primary" onClick={onStart}>
                    Get Started
                </button>
            </div>
        </div>
    );
}