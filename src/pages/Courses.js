import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const form = useRef(null)

    useEffect(() => {
        async function getData() {
            const request = await axios({ url: 'http://localhost:8080/courses', method: 'get', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors' })
            console.log('request', request)
            let infoCourses = request.data
            console.log('info', infoCourses)
            setCourses(infoCourses)

        }
        getData()
    }, [])

    const handlePostCourse = () => {
        const formData = new FormData(form.current)
        const informationCourse = {
            'name': formData.get('courseName'),
        }
        async function postCourse(data) {
            const request = await axios({ url: 'http://localhost:8080/courses', method: 'post', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors', data })
            console.log(request)
        }
        postCourse(informationCourse)
    }

    const handleDeleteCourse = (idValue) => {
        async function deleteCourse() {
            const request = await axios({ url: `http://localhost:8080/courses/${idValue}`, method: 'delete', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors' })
            console.log(request)
        }
        deleteCourse()
    }

    return (
        <div>
            <Link to="/">Back</Link>
            <h1>{courses.map((item) => (
                <>
                    <Link to={`/courses/${item.id}`}>
                        <p>{item.name}</p>
                    </Link>
                    <button className="btnDelete" onClick={() => handleDeleteCourse(item.id)}>
                        Eliminar curso
                    </button>
                </>
            ))}</h1>

            <form ref={form}>
                <input type="text" name="courseName" />
                <span>Nombre del curso</span>
            </form>
            <button onClick={handlePostCourse}>Agregar curso</button>
        </div>
    )
}

export default Courses
