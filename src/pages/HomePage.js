import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/signup">Sign Up</Link></button>
            <button >Test tí</button>
        </div>
    )
}

export default HomePage