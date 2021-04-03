import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item={title: "Some Title", _id:"ABC"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active?'active':''}`} to={to}>
                        {item.title}
                        &nbsp;
                        {/*{JSON.stringify(active)}*/}
                        <i onClick={() => setEditing(true)} className=" fas fa-pencil-alt float-right"></i>
                    </Link>
                </>
            }
            {
                editing &&
                <>
                    <div className={`nav-link ${active?'active':''}`}>
                        <input
                            onChange={(e) =>
                                setCachedItem({
                                    ...cachedItem,
                                    title: e.target.value
                                })}
                            value={cachedItem.title}/>
                        <div className="float-right">
                            <i onClick={() => deleteItem(item)} className="fas fa-times"></i>
                            &nbsp;
                            <i onClick={() => {
                                setEditing(false)
                                updateItem(cachedItem)
                            }} className="fas fa-check"></i>
                        </div>
                    </div>

                </>
            }
        </>
    )
}

export default EditableItem