import lessonService from "../services/lesson-service";

export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE"
export const CREATE_LESSON = "CREATE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"

export const findLessonsForModule = (dispatch, moduleId) => {
    lessonService.findLessonsForModule(moduleId)
        .then(lessons => dispatch({
            type: FIND_LESSONS_FOR_MODULE,
            lessons: lessons
        }))
}
export const createLesson = (dispatch, moduleId) => {
    lessonService.createLesson(moduleId, {title: "New Lesson"})
        .then(lesson => dispatch({
            type: CREATE_LESSON,
            lesson: lesson
        }))
}
export const updateLesson = (dispatch, newItem) => {
    lessonService.updateLesson(newItem._id, newItem)
        .then(status => dispatch({
            type: UPDATE_LESSON,
            updateLesson: newItem
        }))
}
export const deleteLesson = (dispatch, lessonToDelete) => {
    lessonService.deleteLesson(lessonToDelete._id)
        .then(status => {
            dispatch({
                type: DELETE_LESSON,
                lessonToDelete: lessonToDelete
            })
            dispatch({type: "FIND_TOPICS_FOR_LESSON", topics: []})
            dispatch({type: "FIND_WIDGETS_FOR_TOPIC", widgets: []})
        })
}

const lessonActions = {
    createLesson, findLessonsForModule, updateLesson, deleteLesson
}

export default lessonActions