import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
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

    return (
        <tr>
            <td>
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
            </td>
            <td className="d-none d-sm-table-cell">{course.owner}</td>
            <td className="d-none d-lg-table-cell">{course.lastModified}</td>
            <td>
                {
                    editing &&
                    <i onClick={() => saveCourse()} className="fas fa-check wbdv-green"></i>
                }

                {
                    editing &&
                    <i onClick={() => deleteCourse(course)} className="fa fa-times wbdv-red"
                       aria-hidden="true"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit wbdv-blue"></i>
                }

            </td>
        </tr>)
}

export default CourseRow