import React from 'react';

function DisplayCard(props) {
    return (
        <div className="ui-display-card" style={{
            padding: '20px',
            backgroundColor: '#24283b',
            border: '2px dashed #bb9af3',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            margin: '20px 0'
        }}>
            {/* The magic portal that captures everything placed between our tags */}
            {props.children}
        </div>
    );
}

export default DisplayCard;