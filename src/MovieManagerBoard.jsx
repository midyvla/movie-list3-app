import React, { useState } from 'react';

function MovieManagerBoard() {
    // 1. Object State Declaration
    const [movieProfile, setMovieProfile] = useState({
        title: "Gladiator",
        genre: "Action",
        releaseYear: 2000
    });

    // 2. Array State Declaration
    const [watchlist, setWatchlist] = useState(["Inception", "Interstellar"]);

    // 💡 Handler: Copying and updating an Object safely
    const handleUpgradeGenre = () => {
        setMovieProfile({
            ...movieProfile,       // Step A: Copy all existing key-value pairs
            genre: "Epic Historical" // Step B: Overwrite the target field cleanly
        });
    };

    // 💡 Handler: Copying and updating an Array safely
    const handleAddToWatchlist = () => {
        setWatchlist([
            ...watchlist, // Step A: Copy all existing standalone string values
            "Memento"     // Step B: Append the new entry at the tail end
        ]);
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#24283b',
            borderRadius: '12px',
            border: '2px solid #9ece6a',
            margin: '20px 0',
            color: '#c0caf5'
        }}>
            <h3 style={{ marginTop: 0, color: '#9ece6a' }}>⚙️ Production Management Panel</h3>

            {/* Displaying Object State Data */}
            <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#1a1b26', borderRadius: '6px' }}>
                <h4>🎬 Active Profile: {movieProfile.title}</h4>
                <p>Genre Category: <strong style={{ color: '#bb9af3' }}>{movieProfile.genre}</strong></p>
                <p>Release Epoch: {movieProfile.releaseYear}</p>
                <button onClick={handleUpgradeGenre} style={{ padding: '6px 12px', backgroundColor: '#bb9af3', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', color: '#1a1b26' }}>
                    Refine Genre Classification
                </button>
            </div>

            {/* Displaying Array State Data */}
            <div style={{ padding: '10px', backgroundColor: '#1a1b26', borderRadius: '6px' }}>
                <h4>📌 Live Screening Watchlist</h4>

                <ul style={{
                    paddingLeft: '200px',
                    listStylePosition: 'inside',
                    textAlign: 'left',
                    margin:0
                }}>
                    {watchlist.map((title, index) => (
                        <li
                            key={index}
                            style={{
                                color: '#7aa2f7',
                                marginBottom: '6px'
                            }}
                        >
                            {title}
                        </li>
                    ))}
                </ul>
                <button onClick={handleAddToWatchlist} style={{ padding: '6px 12px', backgroundColor: '#7aa2f7', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', color: '#1a1b26' }}>
                    Queue "Memento" to List
                </button>
            </div>
        </div>
    );
}

export default MovieManagerBoard;