import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse
    }) => {

    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return (<div className="card col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
                 style={{width: "18rem", margin: "15px"}}>
        <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
             className="card-img-top" alt="..."/>
        <div className="card-body">
            {
                !editing &&
                <Link to="/editor">
                    {course.title}
                </Link>
            }
            {
                editing &&
                <input
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
            }
            <p className="card-text">Some Description</p>
            <Link to="/editor" className="btn btn-primary">
                course editor
            </Link>

            {
                editing &&
                <i onClick={() => deleteCourse(course)} className="fa fa-times wbdv-red float-right"
                   aria-hidden="true"></i>
            }
            {
                editing &&
                <i onClick={() => saveCourse()} className="fas fa-check wbdv-green float-right"></i>
            }

            {
                !editing &&
                <i onClick={() =>
                    setEditing(true)} className="fas fa-edit float-right wbdv-blue"/>
            }
        </div>
    </div>)
}

export default CourseCard