import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                TodoList
            </h1>
            <Link to="/" style={linkSTyle}>Home</Link>|
            <Link to="/about" style={linkSTyle}>About</Link>
        </header>
    )


}

const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkSTyle ={
    color: '#fff',
    textDecoration: 'none'
}