import React, { useState } from 'react';

function MovieSearchDashboard() {
    // 1. Core Source State (The absolute minimum data needed)
    const [movies, setMovies] = useState([
        { id: 1, title: "The Dark Knight", genre: "Action", rating: 4.9 },
        { id: 2, title: "Interstellar", genre: "Sci-Fi", rating: 4.8 },
        { id: 3, title: "Schindler's List", genre: "Drama", rating: 4.9 },
        { id: 4, title: "The Departed", genre: "Action", rating: 4.5 }
    ]);
    const [searchTerm, setSearchTerm] = useState("");

    // 2. ⚡ DERIVED STATE (Computed variables recalculated on every render!)
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalMoviesCount = filteredMovies.length;

    const averageRating = totalMoviesCount > 0
        ? (filteredMovies.reduce((sum, m) => sum + m.rating, 0) / totalMoviesCount).toFixed(2)
        : 0;

    return (
        <div style={{ padding: '20px', backgroundColor: '#24283b', borderRadius: '12px', color: '#c0caf5', margin: '20px 0' }}>
            <h3 style={{ marginTop: 0, color: '#bb9af3' }}>🔍 Production Analytics & Search</h3>

            {/* Input updates the searchTerm state anchor */}
            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '8px 12px', width: '100%', boxSizing: 'border-box', borderRadius: '6px', border: '1px solid #414868', backgroundColor: '#16161e', color: '#c0caf5', marginBottom: '15px' }}
            />

            {/* Displaying Live Derived Calculations */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div style={{ padding: '10px', backgroundColor: '#1a1b26', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#7aa2f7' }}>MATCHING RELEASES</span>
                    <h2 style={{ margin: '5px 0 0 0', color: '#7aa2f7' }}>{totalMoviesCount}</h2>
                </div>
                <div style={{ padding: '10px', backgroundColor: '#1a1b26', borderRadius: '6px', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', color: '#9ece6a' }}>AVG AUDIENCE SCORE</span>
                    <h2 style={{ margin: '5px 0 0 0', color: '#9ece6a' }}>{averageRating} / 5</h2>
                </div>
            </div>

            {/* Rendering the Derived Filtered Array */}
            <ul style={{ padding: 0, listStyleType: 'none', margin: 0 }}>
                {filteredMovies.map(movie => (
                    <li key={movie.id} style={{ padding: '10px', backgroundColor: '#1a1b26', margin: '5px 0', borderRadius: '6px', border: '1px solid #414868', display: 'flex', justifyContent: 'space-between' }}>
                        <span>🎬 <strong>{movie.title}</strong> ({movie.genre})</span>
                        <span style={{ color: '#ff9e64' }}>⭐ {movie.rating}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieSearchDashboard;