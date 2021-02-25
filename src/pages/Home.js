import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/teachers">
                <h3>
                    Teachers
                </h3>
            </Link>

            <Link to="/courses">
                <h3>
                    Courses
                </h3>
            </Link>

        </div>
    );
}

export default Home;