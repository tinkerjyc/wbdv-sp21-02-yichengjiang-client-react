import React, {useState} from 'react'


const initialState = {
    modules: []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "CREATE_MODULE":
            const newState = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
            return newState
        case "DELETE_MODULE":
            const newState1 = {
                ...state,
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1

        case "UPDATE_MODULE":
            return {
                ...state.modules,
                modules: state.modules.map(module => {
                    if(module._id === action.updateModule._id) {
                        return action.updateModule
                    } else {
                        return module
                    }
                })
            }
        default:
            return state
    }
}
export default moduleReducer