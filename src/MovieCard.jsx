import React from 'react';

function MovieCard(props) {
    return (
        <div className="movie-card" style={{ padding: '15px', border: '2px solid #89b4fa', borderRadius: '8px', margin: '10px 0', backgroundColor: '#313244' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#f5c2e7' }}>🎬 {props.title}</h3>
            <p style={{ margin: 0, color: '#a6adc8' }}>Genre: <strong>{props.genre}</strong></p>
            <p style={{ margin: 0, color: '#f9e2af' }}>Rating: ⭐ {props.rating}/5</p>
        </div>
    );
}

export default MovieCard;