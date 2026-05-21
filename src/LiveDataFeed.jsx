import React, { useState, useEffect } from 'react';

function LiveDataFeed() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //  The Controlled Side Effect Pipeline
    useEffect(() => {
        console.log("🎬 useEffect Triggered: Initiating simulated API database fetch...");

        // Simulate an asynchronous server network response delay of 2 seconds
        const timer = setTimeout(() => {
            const mockDatabaseFetch = [
                { id: 1, title: "The Matrix", release: "1999" },
                { id: 2, title: "The Matrix Reloaded", release: "2003" },
                { id: 3, title: "The Matrix Revolutions", release: "2003" }
            ];

            setMovies(mockDatabaseFetch); // Update data vault
            setIsLoading(false);          // Kill the loader spinner
            console.log("📡 API Data successfully synced to state vault with no loop leaks.");
        }, 2000);

    }, []); // ⚡ EMPTY DEPENDENCY ARRAY: Guarantees this runs EXACTLY ONCE on page mount!

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#1e1e2e',
            borderRadius: '12px',
            border: '2px solid #bb9af3',
            margin: '20px 0',
            color: '#cdd6f4'
        }}>
            <h3 style={{ marginTop: 0, color: '#bb9af3' }}>📡 Live API Synchronization Monitor</h3>

            {/* Conditional Interface Branching learned in Chapter 3! */}
            {isLoading ? (
                <p style={{ color: '#ff9e64', fontStyle: 'italic' }}>🔄 Connecting to data pipeline. Streaming assets...</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {movies.map(movie => (
                        <li key={movie.id} style={{ padding: '8px', backgroundColor: '#1a1b26', margin: '5px 0', borderRadius: '6px', border: '1px solid #414868' }}>
                            🟢 <strong>{movie.title}</strong> — Released: {movie.release}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LiveDataFeed;