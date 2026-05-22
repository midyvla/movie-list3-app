import React, { useState, useEffect } from 'react';

function ActiveTicker() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("🟢 Ticker Mounted: Spawning background interval stream...");

        // 1. Establish an ongoing background background interval loop thread
        const intervalId = setInterval(() => {
            setSeconds(prev => {
                const next = prev + 1;
                console.log("⏱️ Background Tick Loop Executed. Seconds count: ", next);
                return next;
            });
        }, 1000);

        // 2. THE CLEANUP RETURN MATRIX
        return () => {
            console.log("🔴 Ticker Unmounting: Invoking automated janitor loop...");
            clearInterval(intervalId); // Terminate the background browser interval loop instantly
            console.log("🧼 Memory space cleared. Background ghost process destroyed.");
        };

    }, []); // Run exactly once on mount, keep the cleanup registered for unmount

    return (
        <div style={{
            padding: '15px',
            backgroundColor: '#1a1b26',
            borderRadius: '8px',
            border: '2px solid #ff9e64',
            textAlign: 'center',
            margin: '10px 0'
        }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#ff9e64' }}>⏱️ Active Monitoring Session</h4>
            <p style={{ margin: 0, color: '#c0caf5', fontSize: '18px' }}>
                Session Duration: <strong>{seconds}s</strong>
            </p>
        </div>
    );
}

export default ActiveTicker;