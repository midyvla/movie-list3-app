import React from 'react';

function FeaturedMovieCard(props) {
    // 1. Core Data Deconstruction
    const { title, rating, isClassic } = props;

    return (
        <div className="conditional-card" style={{
            padding: '20px',
            borderRadius: '12px',
            margin: '15px 0',
            backgroundColor: '#24283b',
            // Ternary Operator applied to a style property!
            border: rating >= 4.9 ? '2px solid #9ece6a' : '1px solid #414868',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ margin: 0, color: '#c0caf5' }}>{title}</h3>

                {/* 2. The Short-Circuit Operator (All or Nothing) */}
                {isClassic && (
                    <span style={{
                        backgroundColor: '#bb9af3',
                        color: '#1a1b26',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: 'bold'
                    }}>
                        🏛️ CLASSIC
                    </span>
                )}
            </div>

            {/* 3. The Ternary Operator (Either / Or Layout Elements) */}
            {rating >= 4.9 ? (
                <p style={{ margin: '8px 0 0 0', color: '#9ece6a', fontSize: '14px' }}>
                    🔥 Highly Recommended Masterpiece! (Score: {rating}/5)
                </p>
            ) : (
                <p style={{ margin: '8px 0 0 0', color: '#a9b1d6', fontSize: '14px' }}>
                    🍿 Standard Release Track (Score: {rating}/5)
                </p>
            )}
        </div>
    );
}

export default FeaturedMovieCard;