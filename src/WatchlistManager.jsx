import React, { useState } from 'react';

function WatchlistManager() {
    // 1. Initialize our array of movie records in state
    const [movies, setMovies] = useState([
        { id: 'mov_1', title: "Inception", runtime: "148 min" },
        { id: 'mov_2', title: "Gladiator", runtime: "155 min" },
        { id: 'mov_3', title: "Interstellar", runtime: "169 min" },
        { id: 'mov_4', title: "Memento", runtime: "113 min" }
    ]);

    // 2. The Deletion Core Handler
    const handleDeleteMovie = (targetId) => {
        // We pass a functional updater callback to guarantee we have the absolute freshest state
        setMovies(prevMovies => {
            const filteredResult = prevMovies.filter(movie => movie.id !== targetId);

            console.log("Old Array Memory Reference Pointer dropped.");
            console.log("New Filtered Array Reference shipped to React:", filteredResult);

            return filteredResult;
        });
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#24283b',
            borderRadius: '12px',
            border: '2px solid #f7768e',
            margin: '20px 0',
            color: '#c0caf5'
        }}>
            <h3 style={{ marginTop: 0, color: '#f7768e' }}>🗑️ Dynamic Watchlist Purge Board</h3>
            <p style={{ color: '#a9b1d6' }}>Clicking delete invokes a non-mutating immutable filter stream:</p>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {movies.map(movie => (
                    <li
                        key={movie.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px',
                            backgroundColor: '#1a1b26',
                            borderRadius: '6px',
                            margin: '8px 0',
                            border: '1px solid #414868'
                        }}
                    >
                        <span>🎬 <strong>{movie.title}</strong> — {movie.runtime}</span>

                        {/* Passing the specific item id safely using an inline arrow function */}
                        <button
                            onClick={() => handleDeleteMovie(movie.id)}
                            style={{
                                padding: '4px 10px',
                                backgroundColor: '#f7768e',
                                border: 'none',
                                borderRadius: '4px',
                                color: '#1a1b26',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {/* Conditional Empty State Handling */}
            {movies.length === 0 && (
                <p style={{ color: '#565f89', fontStyle: 'italic', textAlign: 'center' }}>
                    Watchlist completely cleared. Memory references pruned.
                </p>
            )}
        </div>
    );
}

export default WatchlistManager;