import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="page-header" style={{textAlign: "center", paddingTop: "20px"}}>
            <h1>ZM Todo List</h1><br/>
            <nav class="navbar navbar-expand navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
