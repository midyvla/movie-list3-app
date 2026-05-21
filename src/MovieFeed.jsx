import React from 'react';
import MovieCard from './MovieCard.jsx';

function MovieFeed() {
    // A mock data array mimicking a clean database query feed
    const rawMovieData = [
        { id: 'mov_101', title: "Inception", genre: "Sci-Fi", rating: 4.8 },
        { id: 'mov_102', title: "Gladiator", genre: "Action", rating: 4.9 },
        { id: 'mov_103', title: "Interstellar", genre: "Sci-Fi", rating: 5.0 },
        { id: 'mov_104', title: "The Matrix", genre: "Sci-Fi", rating: 4.7 }
    ];

    return (
        <div className="movie-feed-container">
            <h2 style={{ color: '#89b4fa', borderBottom: '1px solid #45475a', paddingBottom: '8px' }}>
                🍿 Automated Database Feed
            </h2>

            {/* Transforming raw data objects into tracking layout blocks */}
            {rawMovieData.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    genre={movie.genre}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}

export default MovieFeed;