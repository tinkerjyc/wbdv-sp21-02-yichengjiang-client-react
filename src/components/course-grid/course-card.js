import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-card.css'

const CourseCard = (
    {
        course,
        deleteCourse,
        updateCourse,
        title
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <br/>
            <div className="card">
                <div className="my-controls-at-top-right" align="right">
                    {editing && <i onClick={() => saveTitle()} className="fas fa-check green-check"></i>}
                    {editing && <i onClick={() => deleteCourse(course)} className="fas fa-times red-times"></i>}
                </div>

                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    {
                        !editing &&
                        <Link to={`/courses/grid/edit/${course._id}`}>
                            <h5 className="card-title">{course.title}</h5>
                        </Link>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }

                    <p className="card-text">
                        Some description.</p>
                    <img src={``}/>
                    <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">
                        {course.title}
                    </Link>
                </div>
                <div className="card-footer">
                    <i onClick={() => setEditing(true)} className="fas fa-edit float-right title-icons"></i>
                </div>
            </div>
        </div>
    )
}
export default CourseCard