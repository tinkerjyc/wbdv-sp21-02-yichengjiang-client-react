import React, {useState} from 'react';

const ListWidget = (
    {
        widget,
        setWidget,
        editing
    }) => {
    const [listWidget, setListWidget] = useState(widget);
    return (

        <div>
            {!editing ? (
                listWidget.widgetOrder ? (
                    <ol>
                        {
                            listWidget && listWidget.text && listWidget.text.split("\n")
                                .map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                        }
                    </ol>
                ) : (
                    //not ordered
                    <ul>
                        {
                            listWidget && listWidget.text && listWidget.text.split("\n")
                                .map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                        }
                    </ul>
                )
            ) : (
                 <div>
                     <input
                         onChange={(e) => {
                             const newWidget = {...listWidget};
                             newWidget["widgetOrder"] = e.target.checked ? 1 : 0;
                             setListWidget(newWidget);
                             setWidget(newWidget);
                         }}
                         type="checkbox" checked={listWidget.widgetOrder}
                     /> Ordered
                     <br/>
                     List Items
                     <textarea
                         onChange={(e) => {
                             const newWidget = {...listWidget};
                             newWidget["text"] = e.target.value;
                             setListWidget(newWidget);
                             setWidget(newWidget);
                         }}
                         rows={10} value={listWidget.text} placeholder={"one list item per line"}
                         className="form-control">
                    </textarea>
                 </div>
             )}

        </div>
    )
}

export default ListWidget