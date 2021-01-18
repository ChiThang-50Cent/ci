import React from 'react'
import Book from './Book.jsx'

export default function BookList(props) {

    console.log(props)
    return (
        <div style={{
            height: '80vh',
            borderTop: '2px solid black',
            margin: 12,
            overflowY: "scroll",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        }}>
            {
                props.books.map((book, index) => <Book
                    key={index}
                   book={book}
                />)
            }
        </div>
    )


}
