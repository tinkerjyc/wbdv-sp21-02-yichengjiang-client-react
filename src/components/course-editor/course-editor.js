import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import widgetReducer from "../reducers/widget-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills"
import WidgetList from "../widgets/widget-list";
import courseService from "../../services/course-service";

const reducer = combineReducers({
                                    moduleReducer: moduleReducer,
                                    lessonReducer: lessonReducer,
                                    topicReducer: topicReducer,
                                    widgetReducer: widgetReducer
                                })

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = () => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    const [cachedTitle, setCachedTitle] = useState(" ");

    useEffect(() => {
        courseService.findCourseById(courseId).then((res) => {
            setCachedTitle(res.title)
        })
    }, [courseId]);

    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to={`/courses/${layout}`}
                          className="fas fa-times">
                    </Link>
                    &nbsp;&nbsp;
                    {cachedTitle}
                    {/*<Link to="/courses/table">*/}
                    {/*    <i className="fas fa-arrow-left"></i>*/}
                    {/*</Link>*/}
                    {/*<i onClick={() => props.history.goBack()}*/}
                    {/*   className="fas fa-times float-right"></i>*/}
                </h2>

                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        <br/>
                        <TopicPills/>
                        <br/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </Provider>)
}

export default CourseEditor