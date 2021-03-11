const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "CREATE_LESSON":
            const newState = {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
            return newState
        case "DELETE_LESSON":
            // alert("delete the module " + action.moduleToDelete.title)
            const newState1 = {
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(m => {
                    if (m._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return m
                    }
                })
            }
        case "CLEAR_LESSONS":
            return {
                ...state,
                lessons: []
            }
        case "FIND_LESSON":
            return {
                lessons: action.lessons
            }
        default:
            return state
    }
}

export default lessonReducer
