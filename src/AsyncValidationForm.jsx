import React, { useState } from 'react';

function AsyncValidationForm() {
    // A. Unified Form Data Object State
    const [formData, setFormData] = useState({
        username: "",
        email: ""
    });

    // B. Validation & Network Lifecycle States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [clientErrors, setClientErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Universal change handler for controlled inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Simulated Server API Endpoint with business rule validation logic
    const mockServerApiCheck = (payload) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate a database check for an existing record duplicate
                if (payload.email.toLowerCase() === "vladimir@ny.com") {
                    reject(new Error("Conflict (409): That email address is already registered to another account."));
                } else {
                    resolve({ status: 201, msg: "Registration validated and stored!" });
                }
            }, 2000); // 2-second network latency delay simulation
        });
    };

    // Core Validation Loop Handler
    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Intercept browser page-refresh behavior

        // Reset old error logs before starting a new evaluation track
        setClientErrors({});
        setServerError("");
        setSuccessMessage("");

        // === PHASE 1: CLIENT-SIDE VALIDATION CHECK ===
        const localErrors = {};
        if (formData.username.trim().length < 4) {
            localErrors.username = "Username must be at least 4 characters long.";
        }
        if (!formData.email.includes("@")) {
            localErrors.email = "Invalid email formatting syntax discovered.";
        }

        // If any client checks failed, break the loop early and show errors
        if (Object.keys(localErrors).length > 0) {
            setClientErrors(localErrors);
            return;
        }

        // === PHASE 2: PENDING STATUS DISPATCH ===
        setIsSubmitting(true); // Engages UI locking system

        try {
            // === PHASE 3: ASYNCHRONOUS SERVER VALIDATION ===
            const result = await mockServerApiCheck(formData);

            // Success Path
            setSuccessMessage(`🎉 ${result.msg}`);
            setFormData({ username: "", email: "" }); // Clean out inputs upon success
        } catch (error) {
            // Failure Path: Loop server exception payload back into user display state
            setServerError(error.message);
        } finally {
            // === PHASE 4: EXIT ASYNC LOCK ===
            setIsSubmitting(false); // Unlocks form inputs for retry paths
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#24283b', borderRadius: '12px', color: '#c0caf5', maxWidth: '400px', margin: '20px 0', border: '1px solid #414868' }}>
            <h3 style={{ marginTop: 0, color: '#7aa2f7' }}>📡 Security Gateway Validation Loop</h3>

            <form onSubmit={handleFormSubmit}>
                {/* Username Input Field */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Profile Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        disabled={isSubmitting} // Lock field during active network loop
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: isSubmitting ? '#1a1b26' : '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                    {clientErrors.username && <span style={{ color: '#f7768e', fontSize: '11px' }}>⚠️ {clientErrors.username}</span>}
                </div>

                {/* Email Input Field */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px' }}>Network Connectivity Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #414868', backgroundColor: isSubmitting ? '#1a1b26' : '#16161e', color: '#c0caf5', boxSizing: 'border-box' }}
                    />
                    {clientErrors.email && <span style={{ color: '#f7768e', fontSize: '11px' }}>⚠️ {clientErrors.email}</span>}
                </div>

                {/* Live Async Feedback Windows */}
                {serverError && <div style={{ padding: '10px', backgroundColor: '#3d2b3d', borderLeft: '4px solid #f7768e', borderRadius: '4px', color: '#f7768e', fontSize: '13px', marginBottom: '15px', fontWeight: 'bold' }}>{serverError}</div>}
                {successMessage && <div style={{ padding: '10px', backgroundColor: '#2e3c38', borderLeft: '4px solid #9ece6a', borderRadius: '4px', color: '#9ece6a', fontSize: '13px', marginBottom: '15px', fontWeight: 'bold' }}>{successMessage}</div>}

                {/* Context-Aware Submit Button Action Controller */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{ width: '100%', padding: '10px', backgroundColor: isSubmitting ? '#565f89' : '#7aa2f7', color: '#1a1b26', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '14px' }}
                >
                    {isSubmitting ? "Executing Remote DB Check..." : "Authenticate Registry Payload"}
                </button>
            </form>
        </div>
    );
}

export default AsyncValidationForm;