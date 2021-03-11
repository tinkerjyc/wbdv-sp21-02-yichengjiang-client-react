import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service"

const TopicPills = (
    {
        myTopics=[],
        createTopic,
        deleteTopic,
        updateTopic,
        findTopicsForLesson,
        clearTopics,
        theTopic,
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    const [enableAddButton, setEnableAddButton] = useState(false)
    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined"
            && lessonId !== 'undefined' && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId);
            setEnableAddButton(true)
        }else{
            setEnableAddButton(false)
            clearTopics()
        }
    }, [moduleId, lessonId, topicId, findTopicsForLesson]);
    return(
        <div>
            {/*<h2>Lessons</h2>*/}
            <ul className="nav nav-pills">
                {
                    myTopics.map(topic =>
                        <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`} key={topic._id}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                active={topic._id === topicId}
                                item={topic}/>
                        </li>
                    )
                }
                &nbsp;&nbsp;&nbsp;&nbsp;
                {   enableAddButton &&
                    <li className="nav-item">
                        <i onClick={() => createTopic(lessonId)} className="fas fa-plus fa-2x" style={{color:"#007bff"}}></i>
                    </li>
                }
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myTopics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => {
    return {
        createTopic: (lessonId) => {
            // console.log("CREATE TOPICS FOR LESSON: " + lessonId)
            topicService.createTopic(lessonId, {title: "New Topic"})
                .then(theActualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theActualTopic
                }))
        },
        deleteTopic: (item) =>
            topicService.deleteTopic(item._id)
                .then(status => dispatch({
                    type: "DELETE_TOPIC",
                    topicToDelete: item
                })),
        updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                })),
        findTopicsForLesson: (lessonId) => {
            // console.log("LOAD TOPICS FOR LESSON:")
            // console.log(lessonId)
            topicService.findTopicsForLesson(lessonId)
                .then(theTopics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: theTopics
                }))
        },
        clearTopics: () => dispatch({
            type:"CLEAR_TOPICS"
        }),
        findTopic: (topicId) =>
            topicService.findLesson(topicId)
                .then(theTopic => dispatch({
                    type: "FIND_TOPIC",
                    topic: theTopic
                }))
    }
}

export default connect(stpm, dtpm)
(TopicPills)