import React, { useState } from 'react';

function MovieRatingCounter() {
    // 1. The Core State Declaration
    const [likes, setLikes] = useState(0);

    // 2. The Event Handler Logic Channel
    const handleIncrement = () => {
        setLikes(likes + 1);
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#24283b',
            borderRadius: '12px',
            border: '2px solid #ff9e64',
            margin: '20px 0',
            textAlign: 'center'
        }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#ff9e64' }}>📈 Audience Popularity Meter</h3>
            <p style={{ color: '#c0caf5', fontSize: '16px' }}>
                Total Likes: <strong style={{ color: '#f7768e', fontSize: '20px' }}>{likes}</strong>
            </p>

            {/* 3. Attaching our event trigger to our state setter */}
            <button
                onClick={handleIncrement}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#ff9e64',
                    border: 'none',
                    borderRadius: '6px',
                    color: '#1a1b26',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                👍 Upvote Movie
            </button>
        </div>
    );
}

export default MovieRatingCounter;