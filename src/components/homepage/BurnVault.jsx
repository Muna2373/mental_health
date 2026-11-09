function BurnVault() {
    return (
        <div className="burn-vault">
            <div className="title">🔥 The Digital Burn Vault
                <div className="burn-time">
                     Ephemeral
                 </div>
            </div>
            <p>
                Release your burdens into smoke. Transcribe what weighs on you and set it to auto-destruct.
            </p>
            <div className="thought_box">
                <h3> ✍️ What's on your mind today??</h3>

                <textarea placeholder="Write your thoughts, feelings, or worries here...." maxLength={500}
                />

                <div className="character-count">
                    0 / 500
                </div>
            </div>
            <div className="lock"> 🔒 Your thoughts are private and will be automatically deleted after the selected time
            </div>
            <div className="burn_options">
                <div className="burn-options">

                    <span>Burn after:</span>

                    <button onClick={() => setBurnAfter("12 Hours")}>
                        12 Hours
                    </button>

                    <button onClick={() => setBurnAfter("1 Day")}>
                        1 Day
                    </button>

                    <button onClick={() => setBurnAfter("2 Days")}>
                        2 Days
                    </button>

                    <button onClick={() => setBurnAfter("7 Days")}>
                        7 Days
                    </button>

                </div>
                <button className="release_button">
                    🔥 Release My Stress
                </button>

            </div>

            <div className="active_burn">

                <div className="burn_icon">
                    🔥
                </div>

                <div className="burn_divider"></div>

                <div className="burn_details">

                    <div className="active_burn_header">

                        <div className="burn_titles">
                            <h4>Active Incineration Cycle</h4>
                            <h3>Work Overload & Expectations</h3>
                        </div>

                        <p className="burn_count">
                            🕒 Burns in 2d, 14h
                        </p>

                    </div>

                    <p className="burn_description">
                        Carrying client friction and unreasonable
                        timelines through the weekend. Leaving...
                    </p>

                    <div className="burn_progress_row">
                        <div className="burn_progress">
                            <div className="burn_progress_fill"></div>
                        </div>

                        <span>42%</span>
                    </div>

                </div>

            </div>


        </div>

    );
}
 export default BurnVault;