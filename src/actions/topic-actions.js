import topicService from "../services/topic-service";
import {FIND_WIDGETS_FOR_TOPIC} from "./widget-actions";

export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"

export const findTopicsForLesson = (dispatch, lessonId) => {
    topicService.findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPICS_FOR_LESSON,
            topics: topics
        }))
}
export const createTopic = (dispatch, lessonId) => {
    topicService.createTopic(lessonId, {title: "New Topic"})
        .then(topic => dispatch({
            type: CREATE_TOPIC,
            topic: topic
        }))
}
export const updateTopic = (dispatch, newItem) => {
    topicService.updateTopic(newItem._id, newItem)
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            updateTopic: newItem
        }))
}
export const deleteTopic = (dispatch, topicToDelete) => {
    topicService.deleteTopic(topicToDelete._id)
        .then(status => {
            dispatch({type: DELETE_TOPIC, topicToDelete: topicToDelete})
            dispatch({type: FIND_WIDGETS_FOR_TOPIC, widgets: []})
        })
}

const topicActions = {
    createTopic, findTopicsForLesson, updateTopic, deleteTopic
}

export default topicActions