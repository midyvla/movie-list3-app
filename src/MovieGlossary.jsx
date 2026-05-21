import React from 'react';

function MovieGlossary() {
    const movieDetails = [
        { id: 'feat_1', term: "Director", detail: "Christopher Nolan" },
        { id: 'feat_2', term: "Cinematography", detail: "Hoyte van Hoytema" },
        { id: 'feat_3', term: "Music Composer", detail: "Hans Zimmer" }
    ];

    return (
        <div style={{ padding: '20px', backgroundColor: '#1e1e2e', borderRadius: '12px', margin: '20px 0' }}>
            <h3 style={{ color: '#89b4fa', marginTop: 0 }}>🎬 Production Metadata Glossary</h3>

            <dl style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', color: '#cdd6f4' }}>
                {movieDetails.map((item) => (

                    //  THE KEYED FRAGMENT IN ACTION!
                    <React.Fragment key={item.id}>
                        <dt style={{ fontWeight: 'bold', color: '#f5c2e7' }}>{item.term}:</dt>
                        <dd style={{ margin: 0, color: '#a6adc8' }}>{item.detail}</dd>
                    </React.Fragment>

                ))}
            </dl>
        </div>
    );
}

export default MovieGlossary;