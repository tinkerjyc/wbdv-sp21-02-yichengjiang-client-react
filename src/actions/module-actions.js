import moduleService from "../services/module-service";
import {FIND_LESSONS_FOR_MODULE} from "./lesson-actions";
import {FIND_TOPICS_FOR_LESSON} from "./topic-actions";
import {FIND_WIDGETS_FOR_TOPIC} from "./widget-actions";

export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const FIND_MODULES_FOR_COURSE ="FIND_MODULES_FOR_COURSE"

export const createModule = (dispatch, courseId) => {
    moduleService.createModule(courseId, {title: 'New Module'})
        .then(module => dispatch({type: CREATE_MODULE, module: module}))
}
export const updateModule = (dispatch, newItem) => {
    moduleService.updateModule(newItem._id, newItem)
        .then(status => dispatch({type: UPDATE_MODULE, updateModule: newItem}))
}
export const deleteModule = (dispatch, moduleToDelete) => {
    moduleService.deleteModule(moduleToDelete._id)
        .then(status => {
            dispatch({type: DELETE_MODULE, moduleToDelete: moduleToDelete})
            dispatch({type: FIND_LESSONS_FOR_MODULE, lessons: []})
            dispatch({type: FIND_TOPICS_FOR_LESSON, topics: []})
            dispatch({type: FIND_WIDGETS_FOR_TOPIC, widgets: []})
        })

}
export const findModulesForCourse = (dispatch, courseId) => {
    moduleService.findModulesForCourse(courseId)
        .then(modules => dispatch({
            type: FIND_MODULES_FOR_COURSE,
            modules: modules
        }))
}

const moduleActions = {
    createModule, findModulesForCourse, updateModule, deleteModule
}

export default moduleActions