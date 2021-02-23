import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = ({
                        courses,
                        deleteCourse,
                        updateCourse
                    }) => {

    return (<div>
        <div className="row">
            <div className="col-md-5 d-none d-md-block">
                Recent Document
            </div>

            <div className="col-md-5 d-none d-md-block">
                Order by me
            </div>

            <div className="col-md-2">
                <i className="fas fa-folder fa-2x" aria-hidden="true"></i>
                <i className="fa fa-sort fa-2x" aria-hidden="true"></i>
                <Link to="/courses/table">
                    <i className="fas fa-2x fa-list"></i>
                </Link>
            </div>
        </div>

        {/*<h2>Course Grid {courses.length}</h2>*/}
        <div className="row">
            {
                courses.map(course =>
                                <CourseCard
                                    course={course}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                />
                )
            }
        </div>

    </div>)

}

export default CourseGrid