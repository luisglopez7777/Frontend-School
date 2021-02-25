import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Teacher = (props) => {
    const [course, setCourse] = useState([])
    const urlId = props.location.pathname

    useEffect(() => {
        async function getData() {
            const request = await axios({ url: `http://localhost:8080/union${urlId}`, method: 'get', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors' })
            let infoCourse = request.data
            setCourse(infoCourse)
        }
        getData()
    }, [])



    return (
        <div>
            <Link to="/teachers">
                Back
            </Link>

            {Array.isArray(course) && course.length > 0 ?
                <>
                    <h1>Cursos de {course[0].teacher_name}</h1>
                    {course.map((item, index) => (
                        <h3 key={index}>{item.course_name}</h3>
                    ))}
                </>
                :
                <h1>No tiene cursos</h1>
            }
        </div>
    )
}

export default Teacher