import React, { useState } from 'react';

function PreferencesForm() {
    // 1. Initialize our unified form data schema matrix
    const [settings, setSettings] = useState({
        displayName: "",
        notificationFrequency: "Weekly", // Select Dropdown
        themeMode: "Dark",                // Radio Group Target Anchor
        marketingOptIn: false,            // Checkbox Flag A
        betaTester: true                  // Checkbox Flag B
    });

    // 2. THE UPGRADED UNIVERSAL INTERCEPTOR HANDLER
    const handleSettingChange = (e) => {
        const { name, type, value, checked } = e.target;

        setSettings(prevSettings => {
            // Check element type: if checkbox, extract boolean 'checked', else use 'value'
            const assignedValue = type === 'checkbox' ? checked : value;

            const updatedMatrix = {
                ...prevSettings,
                [name]: assignedValue // Dynamically route the evaluated variable value
            };

            console.log("⚙️ Polymorphic State Update:", updatedMatrix);
            return updatedMatrix;
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 Configuration Saved to Endpoint Matrix:", settings);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#24283b', borderRadius: '12px', color: '#c0caf5', maxWidth: '450px', margin: '20px 0', border: '1px solid #414868' }}>
            <h3 style={{ marginTop: 0, color: '#9ece6a' }}>⚙️ Workspace Preferences Matrix</h3>

            <form onSubmit={handleFormSubmit}>
                {/* Standard Text Box */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Public Display Name:</label>
                    <input
                        type="text"
                        name="displayName"
                        value={settings.displayName}
                        onChange={handleSettingChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                </div>

                {/* Select Dropdown Menu */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Notification Frequency:</label>
                    <select name="notificationFrequency" value={settings.notificationFrequency} onChange={handleSettingChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', cursor: 'pointer' }}>
                        <option value="Instant">Real-Time Alerts</option>
                        <option value="Daily">Daily Summary Ledger</option>
                        <option value="Weekly">Weekly Aggregate Digest</option>
                    </select>
                </div>

                {/* Mutually Exclusive Radio Button Group Container */}
                <div style={{ marginBottom: '15px', padding: '10px', backgroundColor: '#1a1b26', borderRadius: '6px', border: '1px solid #414868' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: '#7aa2f7', fontWeight: 'bold' }}>UI THEME MOTIF</label>

                    <label style={{ marginRight: '15px', cursor: 'pointer' }}>
                        <input
                            type="radio"
                            name="themeMode" // Must match across all options to enforce mutual exclusion
                            value="Light"    // The specific string payload this button returns
                            checked={settings.themeMode === "Light"} // Evaluates to true if active
                            onChange={handleSettingChange}
                            style={{ marginRight: '5px' }}
                        /> Light Interface
                    </label>

                    <label style={{ cursor: 'pointer' }}>
                        <input
                            type="radio"
                            name="themeMode"
                            value="Dark"
                            checked={settings.themeMode === "Dark"}
                            onChange={handleSettingChange}
                            style={{ marginRight: '5px' }}
                        /> Cyber Dark Mode
                    </label>
                </div>

                {/* Independent Binary Boolean Checkbox Components */}
                <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#1a1b26', borderRadius: '6px', border: '1px solid #414868' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', color: '#bb9af3', fontWeight: 'bold' }}>SYSTEM CONFIGURATIONS</label>

                    <div style={{ marginBottom: '8px' }}>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                name="marketingOptIn"
                                checked={settings.marketingOptIn} // Binds directly to our boolean state field
                                onChange={handleSettingChange}    // Intercepts and reads e.target.checked
                                style={{ marginRight: '8px' }}
                            /> Opt-In to Market Insight Digests
                        </label>
                    </div>

                    <div>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                name="betaTester"
                                checked={settings.betaTester}
                                onChange={handleSettingChange}
                                style={{ marginRight: '8px' }}
                            /> Enroll in High-Frequency Beta Frameworks
                        </label>
                    </div>
                </div>

                <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#9ece6a', color: '#1a1b26', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                    Apply Profile Changes
                </button>
            </form>
        </div>
    );
}

export default PreferencesForm;