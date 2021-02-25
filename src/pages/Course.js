import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Course = (props) => {
    const [teacher, setTeacher] = useState([])
    const urlId = props.location.pathname

    useEffect(() => {
        async function getData() {
            const request = await axios({ url: `http://localhost:8080/union${urlId}`, method: 'get', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors' })
            let infoCourse = request.data
            setTeacher(infoCourse)
        }
        getData()
    }, [])
    return (
        <div>
            <Link to="/courses">
                Back
            </Link>

            {Array.isArray(teacher) && teacher.length > 0 ?
                <>
                    <h1>Profesores de {teacher[0].course_name}</h1>
                    {teacher.map((item, index) => (
                        <h3 key={index}>{item.teacher_name}</h3>
                    ))}
                </>
                :
                <h1>No tiene profesores</h1>
            }
        </div>
    )
}

export default Course