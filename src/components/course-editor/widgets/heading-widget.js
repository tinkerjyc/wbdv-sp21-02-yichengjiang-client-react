import React, {useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
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
                                    setWidget({...w, text: e.target.value})
                                }}
                                value={w.text}
                                className="form-control"/>
                            <select
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setWidget({...w, size: parseInt(e.target.value)})
                                }}
                                value={w.size}
                                className="form-control">
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>
                        </>
                    }
                    {
                        !editing &&
                        <>
                            {widget.size === 1 && <h1>{widget.text}</h1>}
                            {widget.size === 2 && <h2>{widget.text}</h2>}
                            {widget.size === 3 && <h3>{widget.text}</h3>}
                            {widget.size === 4 && <h4>{widget.text}</h4>}
                            {widget.size === 5 && <h5>{widget.text}</h5>}
                            {widget.size === 6 && <h6>{widget.text}</h6>}
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
export default HeadingWidget