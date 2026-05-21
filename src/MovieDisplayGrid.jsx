import React from 'react';

function MovieDisplayGrid(props) {
    const { items } = props;

    return (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {items.map(movie => (
                <li key={movie.id} style={{
                    padding: '10px',
                    backgroundColor: '#1a1b26',
                    border: '1px solid #414868',
                    borderRadius: '6px',
                    margin: '6px 0',
                    color: '#c0caf5'
                }}>
                    🎬 <strong>{movie.title}</strong> — <span style={{ color: '#bb9af3' }}>{movie.genre}</span>
                </li>
            ))}
            {items.length === 0 && (
                <li style={{ color: '#565f89', fontStyle: 'italic', textAlign: 'center', padding: '10px' }}>
                    No matching records discovered in this viewport.
                </li>
            )}
        </ul>
    );
}

export default MovieDisplayGrid;