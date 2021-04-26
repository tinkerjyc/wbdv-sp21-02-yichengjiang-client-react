import widgetService from "../services/widget-service";

export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const createWidget = (dispatch, topicId) => {
    widgetService.createWidget(topicId, {type: "HEADING", size:1, text: "New Widget"})
        .then(widget => dispatch({
            type: CREATE_WIDGET,
            widget: widget
        }))
}
export const updateWidget = (dispatch, wid, newItem) => {
    widgetService.updateWidget(wid, newItem)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            wid: wid,
            newItem: newItem
        }))
}
export const deleteWidget = (dispatch, wid) => {
    widgetService.deleteWidget(wid)
        .then(status =>
            dispatch({
                type: DELETE_WIDGET,
                widgetToDelete: wid
            }))
}
export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets: widgets
        }))
}

const widgetActions = {
    createWidget, deleteWidget, updateWidget, findWidgetsForTopic
}

export default widgetActions