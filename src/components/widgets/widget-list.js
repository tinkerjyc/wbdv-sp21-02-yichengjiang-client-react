import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from "../../services/widget-service";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        myWidgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        //findAllWidgetsForTopic,
        findWidgetsForTopic,
        clearWidgets,
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    const [enableAddButton, setEnableAddButton] = useState(false);
    const [widget, setWidget] = useState({});

    useEffect(() => {
        console.log("LOAD WIDGETS FOR TOPIC" + topicId)
        if (moduleId !== "undefined" && typeof moduleId !== "undefined"
            && lessonId !== 'undefined' && typeof lessonId !== "undefined"
            && topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId);
            setEnableAddButton(true)
        } else {
            setEnableAddButton(false)
            clearWidgets()
        }
    }, [topicId, moduleId, lessonId, findWidgetsForTopic, widget, setWidget, updateWidget]);
    console.log('111: ', myWidgets);
    return (
        <div>
            {enableAddButton &&
             <div align="right">
                 <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x"></i>
             </div>
            }
            <ul className="list-group">
                {
                    myWidgets.map(_widget =>
                                      <li key={_widget.id} className="list-group-item">
                                          {
                                              _widget.id === widget.id &&
                                              <>
                                                  <i onClick={() => {
                                                      updateWidget(widget.id, widget);
                                                      setWidget({});
                                                  }} className="fas fa-check float-right"></i>
                                                  <i onClick={() => deleteWidget(_widget)}
                                                     className="fas fa-trash float-right"></i>
                                              </>
                                          }
                                          {
                                              _widget.id !== widget.id &&
                                              <i onClick={() => setWidget(_widget)}
                                                 className="fas fa-cog float-right"></i>
                                          }
                                          {
                                              _widget.id === widget.id &&
                                              <select onChange={(e) => {
                                                  const newWidget = {...widget};
                                                  newWidget["type"] = e.target.value;
                                                  updateWidget(newWidget.id, newWidget);
                                                  setWidget(newWidget);
                                              }} value={widget.type} className="form-control">
                                                  <option value="HEADING">Heading</option>
                                                  <option value="PARAGRAPH">Paragraph</option>
                                                  <option value="VIDEO" disabled="disabled">Video
                                                  </option>
                                                  <option value="IMAGE">Image</option>
                                                  <option value="LINK" disabled="disabled">Link
                                                  </option>
                                                  <option value="LIST">List</option>
                                                  <option value="HTML" disabled="disabled">HTML
                                                  </option>
                                              </select>
                                          }
                                          {
                                              _widget.type === "HEADING" &&
                                              <HeadingWidget
                                                  editing={_widget.id === widget.id}
                                                  setWidget={setWidget}
                                                  widget={_widget.id === widget.id ? widget
                                                                                   : _widget}
                                              />
                                          }
                                          {
                                              _widget.type === "PARAGRAPH" &&
                                              <ParagraphWidget
                                                  editing={_widget.id === widget.id}
                                                  setWidget={setWidget}
                                                  widget={_widget.id === widget.id ? widget
                                                                                   : _widget}
                                              />
                                          }
                                          {
                                              _widget.type === "LIST" &&
                                              <ListWidget
                                                  editing={_widget.id === widget.id}
                                                  setWidget={setWidget}
                                                  widget={_widget.id === widget.id ? widget
                                                                                   : _widget}
                                              />
                                          }
                                          {
                                              _widget.type === "IMAGE" &&
                                              <ImageWidget
                                                  editing={_widget.id === widget.id}
                                                  setWidget={setWidget}
                                                  widget={_widget.id === widget.id ? widget
                                                                                   : _widget}
                                              />
                                          }
                                      </li>
                    )
                }
            </ul>
        </div>
    );
}

const stpm = (state) => {
    return {myWidgets: state.widgetReducer.widgets}
}

const dtpm = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => {
            console.log("FIND WIDGETS FOR TOPIC" + topicId)
            widgetService.findWidgetsForTopic(topicId)
                .then(widgets => {
                          console.log(widgets);
                          dispatch({
                                       type: "FIND_ALL_WIDGETS_FOR_TOPICS",
                                       widgets
                                   })
                      }
                );
        },
        updateWidget: (wid, widget) => {
            widgetService.updateWidget(wid, widget)
                .then(status => {
                    dispatch({
                                 type: "UPDATE_WIDGET",
                                 widget
                             });
                });

        },
        createWidget: (topicId) => {
            widgetService.createWidget(topicId, {type: "HEADING", size: 1, text: "New Widget"})
                .then(widgetFromServer => dispatch({
                                                       type: 'CREATE_WIDGET',
                                                       widget: widgetFromServer
                                                   }));
        },
        deleteWidget: (widgetToDelete) => {
            widgetService.deleteWidget(widgetToDelete.id)
                .then(status => dispatch({
                                             type: "DELETE_WIDGET",
                                             widgetToDelete
                                         }));
        },
        clearWidgets: () => dispatch({
                                         type: "CLEAR_WIDGETS"
                                     }),
    }
};

export default connect(stpm, dtpm)(WidgetList);