import React from 'react'
import CourseCard from "../course-card/course-card";
import {Link} from "react-router-dom";
import "./course-grid.css"
// import {deleteCourse, updateCourse} from "../../services/course-service";
import CourseRow from "../course-row/course-row";

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div>
        <div className="row">
            <div className="col-5 d-none d-md-block">
                Recent Documents
            </div>
            <div className="col-4 d-none d-md-block">
                Owned by me
                <i className="fa fa-caret-down"></i>
            </div>
            <div className="col-md-3 icon-right">
                <i className="fas fa-folder"></i>
                &nbsp;&nbsp;
                <i className="fas fa-sort-alpha-up-alt"></i>
                &nbsp;&nbsp;
                <Link to="/courses/table">
                    <i className="fas fa-list"></i>
                </Link>
            </div>
        </div>


        {/*<h2>Course Grid {courses.length}</h2>*/}
        <div className="row">
            {
                courses.map(course =>
                    <CourseCard
                        key={course._id}
                        course={course}
                        updateCourse={updateCourse}
                        deleteCourse={deleteCourse}
                        title={course.title}
                    />
                )
            }
        </div>
    </div>

export default CourseGrid
