import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

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
                    <tr>
                        <td>
                            Tittle
                        </td>
                        <td className="d-none d-sm-table-cell">
                            Owned by
                        </td>
                        <td className="d-none d-lg-table-cell">
                            Last modified
                        </td>
                        <td>
                            <i className="fas fa-folder fa-2x" aria-hidden="true"></i>
                            <i className="fa fa-sort fa-2x" aria-hidden="true"></i>
                            <Link to="/courses/grid">
                                <i className="fas fa-th fa-2x"></i>
                            </Link>


                        </td>
                    </tr>
                    </thead>
                    <tbody>
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