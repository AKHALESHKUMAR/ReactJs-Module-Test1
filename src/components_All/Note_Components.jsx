import React from "react";
import "./Note_Components.css";


function Note_Components({settoggle, toggle, data, setnumber, number, setselected, selected}){
    function noteselectednotehandle(index){
        setnumber(index)
        setselected(false)
    }
    return(
        
        <div className="Note_Category_Container" style={selected ? {display : "flex"} : {display:"none"}}>
            <div className="Title">Pocket Notes</div>
            <button onClick={() => settoggle(!toggle)}>+ Create Notes group</button>
            <div className="Group-Container">
                {
                    data.map((value, i) => {
                        return (
                            <div className="group" style={number == i ? {backgroundColor:"#F7ECDC"}:{}} onClick={() => noteselectednotehandle(i)}>
                                <div className="groupicon">
                                    <img src={value.groupcolor} alt="" />
                                    <h3>{value.groupname.slice(0, 2).toUpperCase()}</h3>
                                </div>
                                <div className="name">{value.groupname}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Note_Components;