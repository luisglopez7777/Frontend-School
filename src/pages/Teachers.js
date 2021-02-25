import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const Teachers = () => {

    const [teachers, setTeachers] = useState([])
    const form = useRef(null)

    useEffect(() => {
        async function getData() {
            const request = await axios({ url: 'http://localhost:8080/teachers', method: 'get', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors' })
            console.log('request', request)
            let infoTeachers = request.data
            console.log('info', infoTeachers)
            setTeachers(infoTeachers)

        }
        getData()
    }, [])


    const handlePostTeacher = () => {
        const formData = new FormData(form.current)
        const informationTeacher = {
            'name': formData.get('teacherName'),
        }
        async function postTeacher(data) {
            const request = await axios({ url: 'http://localhost:8080/teachers', method: 'post', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors', data })
            console.log(request)
        }
        postTeacher(informationTeacher)
    }

    const handleDeleteTeacher = (idValue) => {
        async function deleteTeacher() {
            const request = await axios({ url: `http://localhost:8080/teachers/${idValue}`, method: 'delete', headers: new Headers({ 'Content-type': 'application/json' }), mode: 'cors' })
            console.log(request)
        }
        deleteTeacher()
    }

    return (
        <div>
            <Link to="/">Back</Link>
            <h1>{teachers.map((item) => (
                <>
                    <Link to={`/teachers/${item.id}`}>
                        <p>{item.name}</p>
                    </Link>
                    <button className="btnDelete" onClick={() => handleDeleteTeacher(item.id)}>
                        Eliminar profesor
                    </button>
                </>
            ))}</h1>

            <form ref={form}>
                <input type="text" name="teacherName" />
                <span>Nombre del profesor</span>
            </form>
            <button onClick={handlePostTeacher}>Agregar profesor</button>
        </div>
    )
}

export default Teachers
