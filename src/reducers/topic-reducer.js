import {CREATE_TOPIC, DELETE_TOPIC, FIND_TOPICS_FOR_LESSON, UPDATE_TOPIC} from "../actions/topic-actions";

const initialState = {
    topics: []
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    if(topic._id !== action.topicToDelete._id) {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(topic =>{
                    if(topic._id === action.updateTopic._id) {
                        return action.updateTopic
                    } else {
                        return topic
                    }
                })
            }
        case FIND_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer