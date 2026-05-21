import React, { useState } from 'react';
import ActiveTicker from './ActiveTicker.jsx';

function TickerContainer() {
    const [showTicker, setShowTicker] = useState(false);

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#24283b',
            borderRadius: '12px',
            border: '1px solid #414868',
            margin: '20px 0',
            color: '#c0caf5'
        }}>
            <h3 style={{ marginTop: 0, color: '#ff9e64' }}>🎮 Ticker Environment Lab</h3>
            <p style={{ color: '#a9b1d6' }}>Toggle the sub-component state to view mounting and cleanup logs live:</p>
            
            <button 
                onClick={() => setShowTicker(prev => !prev)}
                style={{
                    padding: '8px 16px',
                    backgroundColor: showTicker ? '#f7768e' : '#9ece6a',
                    border: 'none',
                    borderRadius: '6px',
                    color: '#1a1b26',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginBottom: '15px'
                }}
            >
                {showTicker ? "Destroy Ticker Instance" : "Spawn Ticker Instance"}
            </button>

            {/* Conditional structural rendering to completely mount/unmount the child */}
            {showTicker ? <ActiveTicker /> : (
                <p style={{ margin: 0, color: '#565f89', fontStyle: 'italic' }}>
                    No active background processes running. System clean.
                </p>
            )}
        </div>
    );
}

export default TickerContainer;