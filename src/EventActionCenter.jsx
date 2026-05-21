import React from 'react';

function EventActionCenter() {
    // 1. Standard Event Handler (onClick)
    const handleAlertClick = () => {
        alert("⚡ Event Reference Triggered Successfully!");
    };

    // 2. Data Capture Event Handler (onChange)
    const handleInputChange = (e) => {
        // e.target points to the actual input element in the DOM
        console.log("User typed text:", e.target.value);
    };

    // 3. Inline Parameter Event Handler
    const handleCustomGreeting = (userName) => {
        alert(`Welcome to Chapter 3, Wizard ${userName}!`);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#24283b', borderRadius: '12px', margin: '20px 0', border: '1px solid #414868' }}>
            <h3 style={{ color: '#7aa2f7', marginTop: 0 }}>🎮 Interactive Event Registry</h3>

            {/* Standard Reference Pass */}
            <button
                onClick={handleAlertClick}
                style={{ padding: '8px 16px', backgroundColor: '#7aa2f7', border: 'none', borderRadius: '6px', color: '#1a1b26', fontWeight: 'bold', cursor: 'pointer', marginRight: '10px' }}
            >
                Fire Alert
            </button>

            {/* Capturing Input Streams via the Synthetic Event (e) */}
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Type to view logs..."
                style={{ padding: '8px', borderRadius: '6px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', marginRight: '10px' }}
            />

            {/* Passing Parameters Safely using an Inline Arrow Wrapper */}
            <button
                onClick={() => handleCustomGreeting("Alex")}
                style={{ padding: '8px 16px', backgroundColor: '#bb9af3', border: 'none', borderRadius: '6px', color: '#1a1b26', fontWeight: 'bold', cursor: 'pointer' }}
            >
                Greet Alex
            </button>
        </div>
    );
}

export default EventActionCenter;