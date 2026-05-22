import React, { useState } from 'react';

function RegistrationForm() {
    // 1. Dual State Anchors for Input Fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    // 2. State for Tracking Active Form Errors
    const [error, setError] = useState("");

    // 💡 Live Derived Validation (No extra state needed!)
    const isUsernameValid = username.length >= 4;
    const isEmailValid = email.includes("@") && email.includes(".");
    const isFormReady = isUsernameValid && isEmailValid;

    // 3. Form Submission Handler
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Stop the browser from refreshing the page!

        if (!isFormReady) {
            setError("❌ Cannot submit. Please resolve validation constraints.");
            return;
        }

        setError(""); // Clear errors
        console.log("🚀 Payload verified and shipped successfully!");
        console.log("Submitted Data:", { username, email });

        // Clear form fields
        setUsername("");
        setEmail("");
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#24283b',
            borderRadius: '12px',
            border: '2px solid #7aa2f7',
            margin: '20px 0',
            color: '#c0caf5',
            maxWidth: '400px'
        }}>
            <h3 style={{ marginTop: 0, color: '#7aa2f7' }}>👤 Portal Registration</h3>

            <form onSubmit={handleFormSubmit}>
                {/* --- Username Input Section --- */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Username:</label>
                    <input
                        type="text"
                        value={username} // Binds display value directly to state
                        onChange={(e) => setUsername(e.target.value)} // Syncs keystrokes back to state
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                    {/* Live inline validation indicator */}
                    {!isUsernameValid && username.length > 0 && (
                        <span style={{ color: '#f7768e', fontSize: '11px' }}>⚠️ Must be at least 4 characters long.</span>
                    )}
                </div>

                {/* --- Email Input Section --- */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Email Address:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                    {!isEmailValid && email.length > 0 && (
                        <span style={{ color: '#f7768e', fontSize: '11px' }}>⚠️ Please enter a valid email address.</span>
                    )}
                </div>

                {/* --- Error Feedback Display --- */}
                {error && <p style={{ color: '#f7768e', fontSize: '13px', fontWeight: 'bold' }}>{error}</p>}

                {/* --- Submit Button --- */}
                <button
                    type="submit"
                    disabled={!isFormReady} // Disabled dynamically based on live validations!
                    style={{
                        padding: '10px',
                        width: '100%',
                        backgroundColor: isFormReady ? '#9ece6a' : '#565f89',
                        color: '#1a1b26',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        cursor: isFormReady ? 'pointer' : 'not-allowed',
                        fontSize: '14px',
                        transition: 'background-color 0.2s'
                    }}
                >
                    Register Account
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;