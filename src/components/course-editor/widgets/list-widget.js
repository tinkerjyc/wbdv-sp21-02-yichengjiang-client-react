import React, {useState} from 'react'

const ListWidget = ({widget, deleteWidget, updateWidget}) => {
    const[w, setWidget] = useState(widget);
    const [editing, setEditingWidget] = useState(false);
    return(
        <>
            <div className="row">
                <div className="col-11">
                    {
                        editing &&
                        <>
                            <select
                                onChange={(e) => {
                                    setWidget({...w, type: e.target.value})
                                }}
                                value={w.type}
                                className="form-control">
                                <option value={"HEADING"}>Heading</option>
                                <option value={"PARAGRAPH"}>Paragraph</option>
                                <option value={"IMAGE"}>Image</option>
                                <option value={"LIST"}>List</option>
                            </select>
                            <input
                                onChange={(e) => {
                                    setWidget({...w, ordered: e.target.checked})
                                    console.log(e.target.value)
                                }}
                                checked={w.ordered}
                                type="checkbox"/> Ordered
                            <br/>
                            List Items
                            <textarea
                                onChange={(e) => {
                                    setWidget({...w, text: e.target.value})
                                }}
                                value={w.text}
                                rows="10"
                                className="form-control">
                            </textarea>
                        </>
                    }
                    {
                        !editing &&
                        <>
                            {
                                widget.ordered &&
                                <ol>
                                    {
                                        widget.text.split("\n").map((item) => {
                                            return(
                                                <li>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ol>
                            }
                            {
                                !widget.ordered &&
                                <ul>
                                    {
                                        widget.text.split("\n").map((item) => {
                                            return(
                                                <li>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </>
                    }
                </div>
                <div className="col-1">
                    {
                        editing &&
                        <>
                            <i
                                onClick={() => {
                                    updateWidget(widget.id, w)
                                    setEditingWidget(false)
                                }}
                                className="fas fa-check float-right"></i>
                            <i onClick={() => {
                                deleteWidget(widget.id)
                                setEditingWidget(false)
                            }} className="fas mr-2 fa-trash float-right"></i>
                        </>
                    }
                    {
                        !editing &&
                        <>
                            <i
                                onClick={() => setEditingWidget(true)}
                                className="fas fa-cog float-right">
                            </i>
                        </>
                    }
                </div>
            </div>

        </>
    )
}

export default ListWidget