import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import './course-table.css'

export default class CourseTable extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr >
                            <th className="w-25 title-width">Title</th>
                            <th className="w-25 d-none d-md-table-cell ">Owned by</th>
                            <th className="w-25 d-none d-lg-table-cell ">Last modified</th>
                            <th className="w-25 items-right">
                                <i className="fas fa-folder"></i>
                                &nbsp;&nbsp;
                                <i className="fas fa-sort-alpha-up-alt"></i>
                                &nbsp;&nbsp;
                                <Link to="/courses/grid">
                                    <i className="fas fa-th"></i>
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {/*<CourseRow title="CS5610" owner="me"/>*/}
                    {/*<CourseRow title="CS3200" owner="you"/>*/}
                    {/*<CourseRow title="CS5200" owner="him"/>*/}
                    {/*<CourseRow title="CS4550" owner="she"/>*/}
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                key={course._id}
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                course={course}
                                title={course.title}
                                lastModified={course.lastModified}
                                owner={course.owner}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}