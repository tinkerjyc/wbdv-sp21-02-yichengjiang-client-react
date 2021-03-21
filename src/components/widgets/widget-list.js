import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service";

const WidgetList = (
    {
        myWidgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findAllWidgetsForTopic,
        clearWidgets,
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    const [enableAddButton, setEnableAddButton] = useState(false);
    const [editWidget, setEditWidget] = useState({});
    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined"
            && lessonId !== 'undefined' && typeof lessonId !== "undefined"
            && topicId !== "undefined" && typeof topicId !== "undefined") {
            findAllWidgetsForTopic(topicId);
            setEnableAddButton(true)
        } else {
            setEnableAddButton(false)
            clearWidgets()
        }

    }, [topicId, findAllWidgetsForTopic, editWidget, setEditWidget, updateWidget]);
    const handleUpdateWidget = () => {
        updateWidget(editWidget.id, editWidget);
        setEditWidget({});
    };

    const updateWidgetType = (e) => {
        const newWidget = {...editWidget};
        newWidget["type"] = e.target.value;
        updateWidget(newWidget.id, newWidget);
        setEditWidget(newWidget);
    };

    return (
        <div>
            {enableAddButton &&
             <div align="right">
                 <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x"></i>
             </div>
            }

            <ul className="list-group">
                {
                    myWidgets.map(widget =>
                                      <li key={widget.id} className="list-group-item">
                                          {
                                              editWidget.id === widget.id &&
                                              <select onChange={updateWidgetType}
                                                      value={editWidget.type}
                                                      className="form-control">
                                                  <option value="HEADING">Heading</option>
                                                  <option value="PARAGRAPH">Paragraph</option>
                                              </select>
                                          }
                                          {
                                              widget.type === "HEADING" &&
                                              <HeadingWidget
                                                  editing={editWidget.id === widget.id}
                                                  setEditingWidget={setEditWidget}
                                                  widget={editWidget.id === widget.id ? editWidget
                                                                                      : widget}
                                              />
                                          }
                                          {
                                              widget.type === "PARAGRAPH" &&
                                              <ParagraphWidget
                                                  editing={editWidget.id === widget.id}
                                                  setEditingWidget={setEditWidget}
                                                  widget={editWidget.id === widget.id ? editWidget
                                                                                      : widget}
                                              />
                                          }
                                          {
                                              editWidget.id === widget.id &&
                                              <div>
                                                  <i onClick={handleUpdateWidget}
                                                     className="fas fa fa-check float-right"></i>
                                                  <i onClick={() => deleteWidget(widget)}
                                                     className="fas fa fa-trash float-right"></i>
                                              </div>

                                          }
                                          {
                                              editWidget.id !== widget.id &&
                                              <div>
                                                  <i onClick={() => setEditWidget(widget)}
                                                     className="fas fa fa-cog float-right"></i>
                                              </div>
                                          }
                                      </li>
                    )
                }
            </ul>
        </div>
    );
}

const stpm = (state) => ({
    myWidgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidget: (topicId) => {
        widgetService.createWidget(topicId,
                                   {type: 'HEADING', size: 1, text: 'New Widget'})
            .then(widgetFromServer => dispatch({
                                                   type: 'CREATE_WIDGET',
                                                   widget: widgetFromServer
                                               }));
    },
    deleteWidget: (widget) => {
        widgetService.deleteWidget(widget.id)
            .then(() => dispatch({
                                     type: 'DELETE_WIDGET',
                                     widgetToDelete: widget
                                 }))
    },
    updateWidget: (widgetId, widget) => {
        widgetService.updateWidget(widgetId, widget)
            .then(() => dispatch({
                                     type: 'UPDATE_WIDGET',
                                     widgetToUpdate: widget
                                 }))
    },
    findAllWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(actualWidgets => dispatch({
                                                type: 'FIND_ALL_WIDGETS_FOR_TOPIC',
                                                widgets: actualWidgets
                                            }));
    },
    clearWidgets: () => dispatch({
                                     type: "CLEAR_WIDGETS"
                                 }),
})

export default connect(stpm, dtpm)
(WidgetList);