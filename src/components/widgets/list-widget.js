import React, {useState} from 'react'

const ListWidget = (
    {
        widget,
        setWidget,
        editing
    }) => {
    const [listWidget, setListWidget] = useState(widget);

    return (
        <div>
            <h2>List Widget</h2>
            {
                !editing &&
                <>
                    {
                        listWidget.ordered &&
                        // ordered
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !listWidget.ordered &&
                        //not ordered
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input
                        checked={listWidget.ordered}
                        onChange={e => setListWidget({
                                                         ...listWidget,
                                                         ordered: !listWidget.ordered
                                                     })}
                        type="checkbox"
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
                        rows={10} value={listWidget.text} className="form-control">
                    </textarea>
                </div>
            }
            {/*<textarea></textarea>*/}
        </div>
    )
}

export default ListWidget