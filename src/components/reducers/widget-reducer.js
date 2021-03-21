const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            const newState = {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            return newState
        case "DELETE_WIDGET":
            // alert("delete the widget " + action.widgetToDelete.id)
            const newState1 = {
                widgets: state.widgets.filter(widget => {
                    if (widget.id === action.widgetToDelete.id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case 'UPDATE_WIDGET':
            return {
                ...state,
                widgets: state.widgets.map(w => {
                    return w.id === action.widgetToUpdate.id
                           ? action.widgetToUpdate : w;
                })
            }
        case "CLEAR_WIDGETS":
            return {
                ...state,
                widgets: []
            }
        case "FIND_WIDGET":
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer