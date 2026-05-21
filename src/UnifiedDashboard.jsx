import React, { useState } from 'react';
import SearchInput from './SearchInput.jsx';
import MovieDisplayGrid from './MovieDisplayGrid.jsx';

function UnifiedDashboard() {
    // A. The Central Lifted State Vault
    const [query, setQuery] = useState("");

    // B. Static Source Array Data
    const [database, setDatabase] = useState([
        { id: 1, title: "Inception", genre: "Sci-Fi" },
        { id: 2, title: "The Dark Knight", genre: "Action" },
        { id: 3, title: "Interstellar", genre: "Sci-Fi" },
        { id: 4, title: "Gladiator", genre: "Action" }
    ]);

    // C. Derived State: Compute the filtered subset on the fly during every render
    const filteredMovies = database.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#24283b',
            borderRadius: '12px',
            border: '2px solid #7aa2f7',
            margin: '20px 0'
        }}>
            <h3 style={{ marginTop: 0, color: '#7aa2f7' }}>🎛️ Unified Command Core</h3>

            {/* Step 1: Pass the state value and the setter callback down to the Input child */}
            <SearchInput currentValue={query} onSearchChange={setQuery} />

            {/* Step 2: Pass the cleanly derived filtered array down to the Grid display child */}
            <MovieDisplayGrid items={filteredMovies} />
        </div>
    );
}

export default UnifiedDashboard;