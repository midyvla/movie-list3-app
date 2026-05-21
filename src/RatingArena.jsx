import React from 'react';
import MovieRatingCounter from './MovieRatingCounter.jsx';

function RatingArena() {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#1a1b26',
            borderRadius: '12px',
            border: '2px solid #7aa2f7',
            margin: '20px 0',
            color: '#c0caf5'
        }}>
            <h2 style={{ marginTop: 0, color: '#7aa2f7', borderBottom: '1px solid #414868', paddingBottom: '10px' }}>
                🏟️ Independent Component Arena
            </h2>
            <p style={{ color: '#a9b1d6' }}>
                Clicking each meter below confirms that state remains 100% isolated inside its own instance bubble:
            </p>

            {/* Deploying three completely distinct memory instances of the exact same component code block */}
            <MovieRatingCounter />
            <MovieRatingCounter />
            <MovieRatingCounter />
        </div>
    );
}

export default RatingArena;