
import React, { useState } from 'react';

function StateBatchingLab() {
    const [score, setScore] = useState(0);

    // ❌ The Broken Snapshot Approach
    const handleBrokenTripleIncrement = () => {
        setScore(score + 1);
        setScore(score + 1);
        setScore(score + 1);
        // This log will print the OLD value because the re-render hasn't happened yet!
        console.log("Sam's Snapshot Score Log:", score);
    };

    //  The Correct Functional Updater Approach
    const handleCorrectTripleIncrement = () => {
        setScore(prevScore => prevScore + 1);
        setScore(prevScore => prevScore + 1);
        setScore(prevScore => prevScore + 1);
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#1e1e2e',
            borderRadius: '12px',
            border: '2px dashed #f7768e',
            margin: '20px 0',
            color: '#cdd6f4'
        }}>
            <h3 style={{ marginTop: 0, color: '#f7768e' }}>🧪 Asynchronous State Batching Lab</h3>
            <p style={{ fontSize: '16px' }}>Current Lab Score: <strong style={{ color: '#9ece6a' }}>{score}</strong></p>

            <button
                onClick={handleBrokenTripleIncrement}
                style={{ padding: '8px 16px', backgroundColor: '#f7768e', border: 'none', borderRadius: '6px', color: '#1a1b26', fontWeight: 'bold', marginRight: '10px', cursor: 'pointer' }}
            >
                Snapshot Update (+1 in reality)
            </button>

            <button
                onClick={handleCorrectTripleIncrement}
                style={{ padding: '8px 16px', backgroundColor: '#9ece6a', border: 'none', borderRadius: '6px', color: '#1a1b26', fontWeight: 'bold', cursor: 'pointer' }}
            >
                Functional Update (+3 in reality)
            </button>
        </div>
    );
}

export default StateBatchingLab;