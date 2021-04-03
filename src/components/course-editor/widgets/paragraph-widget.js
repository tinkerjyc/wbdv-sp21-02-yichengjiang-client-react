import React, {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
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
                            <textarea
                                onChange={(e) => {
                                    setWidget({...w, text: e.target.value})
                                }}
                                value={w.text}
                                className="form-control"></textarea>
                        </>
                    }
                    {
                        !editing &&
                        <>
                            <p>
                                {widget.text}
                            </p>
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
                            }} className="fas fa-trash float-right mr-2"></i>
                        </>
                    }
                    {
                        !editing &&
                        <>
                            <i onClick={() => setEditingWidget(true)} className="fas fa-cog float-right"></i>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default ParagraphWidget