import React from 'react'
import {connect} from "react-redux"
import {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../../actions/widget-actions";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
    }) => {
    const {moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
            // if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
            // }
        }
    , [topicId])
    return(
        <div>
            {
                ((moduleId !== "undefined" && typeof moduleId !== "undefined") &&
                    (lessonId !== "undefined" && typeof lessonId !== "undefined") &&
                    (topicId !== "undefined" && typeof topicId !== "undefined")) &&
                <>
                    <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
                    <h2>Widget List</h2>
                </>
            }
            <ul className="list-group">
                {
                    widgets.map(w =>
                    <li className="list-group-item" key={w.id}>
                        {
                            w.type === "HEADING" &&
                            <HeadingWidget
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                widget={w}/>
                        }
                        {
                            w.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                widget={w}/>
                        }
                        {
                            w.type === "LIST" &&
                            <ListWidget
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                widget={w}/>
                        }
                        {
                            w.type === "IMAGE" &&
                            <ImageWidget
                                deleteWidget={deleteWidget}
                                updateWidget={updateWidget}
                                widget={w}/>
                        }
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => widgetActions.createWidget(dispatch, topicId),
    updateWidget: (wid, newItem) => widgetActions.updateWidget(dispatch, wid, newItem),
    deleteWidget: (wid) => widgetActions.deleteWidget(dispatch, wid),
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
})

export default connect(stpm, dtpm)(WidgetList)