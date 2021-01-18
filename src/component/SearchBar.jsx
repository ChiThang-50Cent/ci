import React from 'react'

const style = {
    width: '100%',
    margin: '12px',
    padding: '8px'
}

function SearchBar(props) {
    return (
        <input
            type="text"
            placeholder="Book Name?"
            style={style}
            onKeyDown={props.keyDown}
        />
    )
}

export default SearchBar