import React from 'react';

function SearchInput(props) {
    // Unpack the value and the callback function delivered by the Parent
    const { currentValue, onSearchChange } = props;

    return (
        <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#7aa2f7', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                LIVE FILTER ENGINE
            </label>
            <input
                type="text"
                value={currentValue}
                onChange={(e) => onSearchChange(e.target.value)} // Fire the parent's callback!
                placeholder="Type a title to search..."
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: '1px solid #414868',
                    backgroundColor: '#16161e',
                    color: '#c0caf5',
                    boxSizing: 'border-box'
                }}
            />
        </div>
    );
}

export default SearchInput;