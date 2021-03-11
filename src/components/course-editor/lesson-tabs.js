import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from "../../services/lesson-service";

const LessonTabs = (
    {
        myLessons=[],
        createLesson,
        deleteLesson,
        updateLesson,
        findLessonsForModule,
        clearLessons,
        findLesson,
    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    const [enableAddButton, setEnableAddButton] = useState(false)
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
            setEnableAddButton(true)
        }else {
            setEnableAddButton(false)
            clearLessons()
        }
    }, [moduleId, lessonId, findLessonsForModule]);
    return(
        <div>
            {/*<h2>Lessons</h2>*/}
            <ul className="nav nav-tabs">
                {
                    myLessons.map(lesson =>
                        <li className={`nav-item ${lesson._id === lessonId ? 'active' : ''}`} key={lesson._id}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                active={lesson._id === lessonId}
                                item={lesson}/>
                        </li>
                    )
                }
                &nbsp;&nbsp;&nbsp;&nbsp;
                { enableAddButton &&
                    <li className="nav-item">
                        <i onClick={() => createLesson(moduleId)} className="fas fa-plus fa-2x" style={{color:"#007bff"}}></i>
                    </li>
                }
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myLessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            // console.log("CREATE LESSON FOR MODULE: " + moduleId)
            lessonService.createLesson(moduleId, {title: "New Lesson"})
                .then(theActualLesson => dispatch({
                    type: "CREATE_LESSON",
                    lesson: theActualLesson
                }))
        },
        deleteLesson: (item) =>
            lessonService.deleteLesson(item._id)
                .then(status => dispatch({
                    type: "DELETE_LESSON",
                    lessonToDelete: item
                })),
        updateLesson: (lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
                .then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson
                })),
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(theLessons => dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    lessons: theLessons
                }))
        },
        clearLessons: () => dispatch({
                type:"CLEAR_LESSONS"
        }),
        findLesson: (lessonId) =>
            lessonService.findLesson(lessonId)
                .then(theLesson => dispatch({
                    type: "FIND_LESSON",
                    lesson: theLesson
                }))
    }
}

export default connect(stpm, dtpm)
(LessonTabs)