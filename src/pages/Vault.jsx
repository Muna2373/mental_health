import SanctuaryCanvas from "../components/vault/SanctuaryCanvas.jsx"
import VaultActionButtons from "../components/vault/VaultActionButtons.jsx"
import {useState} from "react"
import '../components/vault/Vault.css'
import TopNav from "../components/calm/TopNav.jsx";

function Vault() {
    const [text, setText] = useState('')
    return (
        <div>
            <TopNav/>
            <h1>Digital Burn Vault</h1>
            <p>Release your stress and negative thoughts.</p>
            <br/>
            <SanctuaryCanvas text={text} setText={setText} />
            <VaultActionButtons />
        </div>
    );
}

export default Vault;