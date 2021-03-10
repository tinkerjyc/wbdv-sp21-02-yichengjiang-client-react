import React from 'react'
import {Link} from "react-router-dom";
import './course-editor.css'

const CourseEditor = ({history}) => {

    return (
        <div>
            <div className="wbdv-editor-bar color-white">
                <div className="row wbdv-editor-padding-right">
                    <i className="fas fa-arrow-left float-right"
                       onClick={() => history.goBack()}/>
                    <div className="col-2 wbdv-home-font-size">
                        CS5610-WebDev
                    </div>
                    <div className="col-1">
                        Build
                    </div>
                    <div className="col-1">
                        Pages
                    </div>
                    <div className="col-1">
                        Theme
                    </div>
                    <div className="col-1">
                        Store
                    </div>
                    <div className="col-1">
                        Apps
                    </div>
                    <div className="col-1">
                        Setting
                    </div>
                    <div className="col-3">
                        <i className="fas fa-plus-circle fa-2x"></i>
                    </div>
                </div>
            </div>
            <div className="row wbdv-editor-padding-top">
                <div className="col-4">
                    <ul className="list-group wbdv-editor-background">
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            Module 1-JQuery
                            <i className="fas fa-trash float-right"></i>
                        </li>
                        <br/>
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            Module 2-React
                            <i className="fas fa-trash float-right"></i>
                        </li>
                        <br/>
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            Module 3-Redux
                            <i className="fas fa-trash float-right"></i>
                        </li>
                        <br/>
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            Module 4-Native
                            <i className="fas fa-trash float-right"></i>
                        </li>
                        <br/>
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            Module 5-Angular
                            <i className="fas fa-trash float-right"></i>
                        </li>
                        <br/>
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            Module 6-Node
                            <i className="fas fa-trash float-right"></i>
                        </li>
                        <br/>
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            Module 7-Mongo
                            <i className="fas fa-trash float-right"></i>
                        </li>
                        <br/>
                        <li className="list-group-item wbdv-editor-background-fontColor">
                            <i className="fas fa-plus-circle float-right"></i>
                        </li>
                    </ul>
                </div>
                <div className="col-8">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                Topic1
                                <i className="fas fa-trash"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Topic2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Topic3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabIndex="-1">Topic4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                                <i className="fas fa-plus-circle"></i>
                            </a>
                        </li>
                    </ul>

                    <br/>

                    <ul className="nav nav-pills float-right">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Save</a>
                        </li>
                        <li className="nav-item">
                            <label className="col-form-label">Preview</label>
                            <input type="checkbox" name="my-checkbox"/>
                        </li>
                    </ul>

                    <div className="wbdv-editor-widget-template">
                        <div className="mb-3 row">
                            <label className="col-sm-5 col-form-label">
                                Heading Weiget
                            </label>
                            <i className="fa fa-arrow-up col-sm-1 form-control background-color-yellow"
                               aria-hidden="true"></i>
                            <i className="fa fa-arrow-down col-sm-1 form-control background-color-yellow"
                               aria-hidden="true"></i>
                            <select className="col-sm-2 form-control">
                                <option>Heading</option>
                                <option>Heading</option>
                                <option>Heading</option>
                            </select>
                            <button className="wbdv-editor-button-format col-sm-1">
                                x
                            </button>

                        </div>

                        <div className="mb-3 row">
                            <input type="text"
                                   placeholder="Heading text"
                                   className=" col-sm-12"/>
                        </div>

                        <div className="mb-3 row">
                            <select className="col-sm-12 form-control">
                                <option>Heading</option>
                                <option>Heading</option>
                                <option>Heading</option>
                            </select>
                        </div>

                        <div className="mb-3 row">
                            <input type="text"
                                   placeholder="Widget name"
                                   className=" col-sm-12"/>
                        </div>

                        <h4>
                            Preview
                        </h4>

                        <h2>
                            Heading text
                        </h2>
                    </div>

                    <div>
                        <i className="fa fa-plus-square fa-2x float-right" aria-hidden="true"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CourseEditor