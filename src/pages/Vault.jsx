import SanctuaryCanvas from "../components/vault/SanctuaryCanvas.jsx";
import VaultActionButtons from "../components/vault/VaultActionButtons.jsx";
import { useState } from "react";
import TopNav from "../components/common/TopNav.jsx";
import SomaticTags from "../components/vault/SomaticTags.jsx";
import AutoDecayProtocol from "../components/vault/AutodecayProtocal.jsx";

function Vault() {
    const [text, setText] = useState('')
    const [selectedTag, setSelectedTag] = useState('Anxiety')
    const [decayDays, setDecayDays] = useState(3)
    const [statusMessage, setStatusMessage] = useState('')

    function handleTextChange(nextText) {
        setText(nextText)
        if (statusMessage) {
            setStatusMessage('')
        }
    }

    function handleSeal() {
        if (!text.trim()) {
            setStatusMessage('Please write a thought before sealing.')
            return
        }
        setStatusMessage(`Sealed under ${selectedTag} for auto-burn in ${decayDays} days.`)
        setText('')
    }

    function handleBurnNow() {
        if (!text.trim()) {
            setStatusMessage('Nothing to incinerate right now.')
            return
        }
        setText('')
        setStatusMessage('Thought incinerated. No trace retained.')
    }

    return (
        <div className="page-shell">
            <TopNav/>
            <h1>Digital Burn Vault</h1>
            <p style={{ color: 'var(--text-muted)' }}>Release your stress and negative thoughts.</p>
            <SomaticTags selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
            <br/>
            <SanctuaryCanvas text={text} setText={handleTextChange} />
            <AutoDecayProtocol decayDays={decayDays} setDecayDays={setDecayDays}/>
            {statusMessage && (
                <p role="status" style={{ color: 'var(--accent-teal)', fontSize: '13px', textAlign: 'center', margin: '0 0 12px' }}>
                    {statusMessage}
                </p>
            )}
            <VaultActionButtons onSeal={handleSeal} onBurnNow={handleBurnNow} />
        </div>
    );
}

export default Vault;