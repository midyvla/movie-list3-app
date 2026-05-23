import React, { useState } from 'react';

function AsyncRegistrationPortal() {
    // 1. Core Data State
    const [email, setEmail] = useState("");

    // 2. Lifecycle & Network UI Tracker States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // 3. Simulated API Communication Hook
    const simulateApiRegister = (submittedEmail) => {
        return new Promise((resolve, reject) => {
            // Simulate a standard 2-second server processing delay
            setTimeout(() => {
                // Mock business rule: reject emails containing "test" to simulate server-side validation
                if (submittedEmail.toLowerCase().includes("test")) {
                    reject(new Error("This email domain has been blacklisted by the network administrator."));
                } else {
                    resolve({ status: 201, message: "Account created successfully!" });
                }
            }, 2000);
        });
    };

    // 4. Async Submission Handler Pipeline
    const handleSubmit = async (e) => {
        e.preventDefault(); // Suppress standard browser page refresh

        // Reset outcome states from any previous attempts
        setServerError("");
        setSuccessMessage("");

        // Enter Pending State
        setIsSubmitting(true);
        console.log("⏳ Submitting payload stream to API gateway...");

        try {
            // Await the asynchronous server response resolution
            const response = await simulateApiRegister(email);

            // Settle on Success Outcome
            setSuccessMessage(`🎉 ${response.message} Welcome to the trading core!`);
            setEmail(""); // Clear out form fields on successful registration
            console.log("🟢 Submission cycle completed with status 201.");
        } catch (err) {
            // Settle on Failure Outcome (Catch network or validation errors)
            setServerError(`❌ Server Reject: ${err.message}`);
            console.error("🔴 Submission cycle failed:", err.message);
        } finally {
            // Exit Pending State (Always runs regardless of success or failure)
            setIsSubmitting(false);
        }
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#24283b',
            borderRadius: '12px',
            border: isSubmitting ? '2px dashed #ff9e64' : '2px solid #7aa2f7',
            margin: '20px 0',
            color: '#c0caf5',
            maxWidth: '400px',
            transition: 'border 0.3s'
        }}>
            <h3 style={{ marginTop: 0, color: '#7aa2f7' }}>📡 Asynchronous API Gateway Form</h3>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>
                        Enter Connectivity Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting} // Freeze input fields while network is active!
                        placeholder="vladimir@example.com"
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #414868',
                            backgroundColor: isSubmitting ? '#24283b' : '#16161e',
                            color: isSubmitting ? '#565f89' : '#c0caf5',
                            boxSizing: 'border-box',
                            cursor: isSubmitting ? 'not-allowed' : 'text'
                        }}
                    />
                </div>

                {/* Dynamic Status Feedback Displays */}
                {serverError && <p style={{ color: '#f7768e', fontSize: '13px', margin: '0 0 15px 0', fontWeight: 'bold' }}>{serverError}</p>}
                {successMessage && <p style={{ color: '#9ece6a', fontSize: '13px', margin: '0 0 15px 0', fontWeight: 'bold' }}>{successMessage}</p>}

                {/* Context-Aware Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting || !email} // Disable to block multi-click submission flooding
                    style={{
                        padding: '10px',
                        width: '100%',
                        backgroundColor: isSubmitting ? '#565f89' : '#7aa2f7',
                        color: '#1a1b26',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: (isSubmitting || !email) ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isSubmitting ? "Syncing with Server..." : "Submit Secure Request"}
                </button>
            </form>
        </div>
    );
}

export default AsyncRegistrationPortal;