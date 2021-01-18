import React from 'react'

export default function Book(props) {
    const imgStyle = {
        height: '90%',
        width: 'auto',
        marginRight: '20px',
        padding: 2,
        border: '2px solid black',
    }
    return (
        <div style={{
            width: '45%',
            margin: '12px',
            borderBottom: '2px solid black',
            height: '32%',
            display: "flex"
        }}>
            <img src={
                props.book.volumeInfo.imageLinks ?
                    props.book.volumeInfo.imageLinks.thumbnail :
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybEPMfqzwy44wVVdSaO8YhMJYUGOXbnikOw&usqp=CAU'
            }
                alt={props.book.volumeInfo.title}
                style={imgStyle}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height:'90%'
            }} >
                <a href={`http://books.google.com.vn/books?id=${props.book.id}`}
                    style={{ textDecoration: "none" }} target="blank" >
                    <p style={{
                        fontSize: '90%',
                        paddingBottom:'5px'
                    }}>{props.book.volumeInfo.title}</p>
                </a>
                <p style={{
                    fontSize: '80%'
                }} >Author: {props.book.volumeInfo.authors ? props.book.volumeInfo.authors.join(', ') : "unknown"}
                </p>
                <p style={{
                    fontSize: '80%'
                }}>Description: </p>
                <p style={{
                    fontSize: '70%',
                    overflowY:'auto'
                }}>
                    {props.book.volumeInfo.description ? props.book.volumeInfo.description : 'none description'}
                </p>
            </div>
        </div>
    )
}
