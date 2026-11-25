import TopNav from "../components/common/TopNav.jsx";

function Game() {
    return (
        <div className="page-shell">
            <TopNav/>
            <h1>Zen Pulse Mini-Game</h1>
            <p style={{ color: 'var(--text-muted)' }}>Take a moment to relax and breathe.</p>
        </div>
    );
}

export default Game;