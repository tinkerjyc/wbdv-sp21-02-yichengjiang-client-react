import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import './course-manager.css'

class CourseManager extends React.Component {
    state = {
        courses: [],
        qwe: 123,
        sdf: 456,
        courseName: ""
    }
    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)

                // courses: prevState.courses.map(c => {
                //   if(c._id === course._id) {
                //     return course
                //   } else {
                //     return c
                //   }
                // })
            })))
    }

    componentDidMount = () =>
        // findAllCourses()
        //     .then(actualCourses => this.setState({
        //       courses: actualCourses
        //     }))
        findAllCourses()
            .then(courses => this.setState({courses}))

    handleAddCourse = ({target}) => {
        this.setState({
                          courseName: target.value
                      })
    }

    addCourse = () => {
        const newCourse = {
            title: this.state.courseName,
            owner: "me",
            lastModified: "1/1/2021"
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })
            ))
        this.setState({courseName: ""});
        // this.state.courses.push(newCourse)
        // this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                // const newCourses = this.state.courses
                //     .filter(course => course !== courseToDelete)
                // this.setState({
                //   courses: newCourses
                // })
                // this.setState((prevState) => {
                //   // let nextState = {...prevState}
                //   // nextState.courses =
                //   //     prevState
                //   //         .courses
                //   //         .filter(course => course !== courseToDelete)
                //
                //   let nextState = {
                //     ...prevState,
                //     courses: prevState.courses.filter
                //               (course => course !== courseToDelete)
                //   }
                //
                //   return nextState
                // })

                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return (
            <div>
                <Route path={["/courses/table", "/courses"]} exact={true}>
                    <div className="wbdv-sticky-top wbdv-padding-12px">
                        <div className="row">
                            <div className="col-1">
                                <i className="fas fa-bars fa-2x"></i>
                            </div>
                            <div className="col-3 d-none d-lg-block">
                                <h4>Course Manager</h4>
                            </div>
                            <div className="col-10 col-lg-7">
                                <input className="form-control" type="text"
                                       onChange={this.handleAddCourse}
                                       value={this.state.courseName}/>
                            </div>
                            <div className="col-1 plus-right">
                                <i onClick={this.addCourse}
                                   className="fas fa-plus-circle fa-2x first-plus">
                                </i>
                            </div>
                        </div>
                    </div>
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                    <div className="fixed-bottom">
                        <i onClick={this.addCourse}
                           className="fas fa-plus-circle fa-4x float-right bottom-plus">
                        </i>
                    </div>
                </Route>

                <Route path="/courses/grid" exact={true}>
                    <div className="wbdv-sticky-top wbdv-padding-12px">
                        <div className="row">
                            <div className="col-1">
                                <i className="fas fa-bars fa-2x"></i>
                            </div>
                            <div className="col-3 d-none d-lg-block">
                                <h4>Course Manager</h4>
                            </div>
                            <div className="col-10 col-lg-7">
                                <input className="form-control" type="text"
                                       onChange={this.handleAddCourse}
                                       value={this.state.courseName}/>
                            </div>
                            <div className="col-1 plus-right">
                                <i onClick={this.addCourse}
                                   className="fas fa-plus-circle fa-2x first-plus">
                                </i>
                            </div>
                        </div>
                    </div>
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                    <div className="fixed-bottom">
                        <i onClick={this.addCourse}
                           className="fas fa-plus-circle fa-4x float-right bottom-plus">
                        </i>
                    </div>
                </Route>
                {/*<Route path="/courses/editor">*/}
                {/*    <CourseEditor/>*/}
                {/*</Route>*/}
                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) => <CourseEditor props={props}/>}>*/}
                {/*</Route>*/}
                {/*<Route path={[*/}
                {/*    "/courses/:layout/edit/:courseId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",*/}
                {/*    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/topicId"]}*/}
                {/*       exact={true}*/}
                {/*       render={(props) => <CourseEditor {...props}/>}>*/}
                {/*</Route>*/}

                <div className="fixed-bottom">
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-left bottom-home"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CourseManager