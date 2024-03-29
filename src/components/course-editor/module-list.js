import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"

const ModuleList = (
    {
        myModules=[],
        createModule=() => alert("Create Module 234"),
        deleteModule=(item) => alert("delete " + item._id),
        updateModule,
        findModulesForCourse=(courseId) => console.log(courseId),
        findModule
    }) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        if (courseId !== 'undefined' && typeof courseId !== "undefined") {
            findModulesForCourse(courseId);
        }
    }, [courseId, moduleId, findModulesForCourse]);
    return(
        <div>
            {/*<h2>Modules</h2>*/}
            <ul className="list-group">
                {
                    myModules.map(module =>
                        <li className={`list-group-item ${module._id === moduleId ? 'active' : ''}`} key={module._id}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                updateItem={updateModule}
                                deleteItem={deleteModule}
                                active={module._id === moduleId}
                                item={module}/>
                        </li>
                    )
                }
                <li className="list-group-item" align="center">
                    <i onClick={() => createModule(courseId)} className="fas fa-plus fa-2x" style={{color:"#007bff"}}></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return {
        myModules: state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module
                })),
        findModulesForCourse: (courseId) => {
            // alert(courseId);
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules
                }))
        },
        findModule: (moduleId) =>
            moduleService.findModule(moduleId)
                .then(theModule => dispatch({
                    type: "FIND_MODULE",
                    module: theModule
                }))
    }
}

export default connect(stpm, dtpm)
(ModuleList)
