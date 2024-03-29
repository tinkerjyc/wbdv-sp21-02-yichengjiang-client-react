import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './course-row.css'

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
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
        <tr>
            <td>
                {
                    !editing &&
                    <div>
                        <i className="fas fa-file-alt title-icons"></i>
                        &nbsp;
                        <Link to={`/courses/table/edit/${course._id}`}>
                            {title}
                        </Link>
                    </div>

                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-md-table-cell ">{owner}</td>
            <td className="d-none d-lg-table-cell ">{lastModified}</td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td align="right">
                {!editing && <i onClick={() => setEditing(true)}
                                className="fas fa-edit title-icons"></i>}
                {editing && <i onClick={() => saveTitle()}
                               className="fas fa-check check-green"></i>}
                {editing && <i onClick={() => deleteCourse(course)}
                               className="fas fa-times times-red"></i>}
            </td>
        </tr>
    )
}
export default CourseRow