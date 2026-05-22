import React, { useState } from 'react';

function UnifiedMultiInputForm() {
    // 1. Initialize the single, unified form state object
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        accountTier: "Standard" // Default selection state
    });

    // 2. THE UNIVERSAL CHANGE HANDLER (The state engine core)
    const handleInputChange = (e) => {
        // Extract the name attribute and text value from the target element
        const { name, value } = e.target;

        setFormData(prevData => {
            const updatedState = {
                ...prevData,    // Step A: Deep-copy all existing fields safely
                [name]: value   // Step B: Dynamically overwrite the specific targeting key!
            };

            console.log("实时表单状态矩阵 Matrix Update:", updatedState);
            return updatedState;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 Safe Payload Bundle Exported:", formData);
        // Reset form object back to default state baseline
        setFormData({ username: "", email: "", password: "", accountTier: "Standard" });
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#24283b', borderRadius: '12px', color: '#c0caf5', maxWidth: '400px', margin: '20px 0', border: '1px solid #414868' }}>
            <h3 style={{ marginTop: 0, color: '#bb9af3' }}>🛡️ Enterprise Multi-Input Portal</h3>
            
            <form onSubmit={handleSubmit}>
                {/* Input 1: Username */}
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Username:</label>
                    <input 
                        type="text"
                        name="username" // CRITICAL: Must match the key name inside our state object exactly!
                        value={formData.username}
                        onChange={handleInputChange} // Uses the single universal handler
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                </div>

                {/* Input 2: Email */}
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Email Address:</label>
                    <input 
                        type="email"
                        name="email" // Matches state key exactly
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                </div>

                {/* Input 3: Password */}
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Password:</label>
                    <input 
                        type="password"
                        name="password" // Matches state key exactly
                        value={formData.password}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                </div>

                {/* Input 4: Select Dropdown Menu */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '13px' }}>Community Account Tier:</label>
                    <select 
                        name="accountTier" // Matches state key exactly
                        value={formData.accountTier}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', boxSizing: 'border-box', cursor: 'pointer' }}>
                        <option value="Standard">Standard Tier Access</option>
                        <option value="Premium">Premium Trading Group</option>
                        <option value="VIP">VIP Direct Mentorship</option>
                    </select>
                </div>

                <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#bb9af3', color: '#1a1b26', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                    Generate Unified Account
                </button>
            </form >
        </div >
    );
}

export default UnifiedMultiInputForm;