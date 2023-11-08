import "./Selected_Components.css";
import submit from "../images-all/submit.png"
import leftarrow from "../images-all/leftarrow.png"
import backgroundimg from "../images-all/BackgroundImg.png"
import lock from "../images-all/lock.png"
import { useEffect, useState } from "react"
import { montharr } from "./Conts";



function Selected_Componenst({data, number, setdata, selected, setselected}){    
    const[text, settext] = useState("")


    function sendData(){
        // data, month , year formates
        let date = new Date().getDate()
        let month = new Date().getMonth()
        let yyyy = new Date().getFullYear();
        let tempdate = date + " " + montharr[month] + " " + yyyy

         // time formate 
         let Minutes = new Date().getMinutes()
         let Hours = new Date().getHours();
         let AmPM = Hours >= 12 ? "Pm" : "Am";
         Hours = Hours % 12
         Hours= Hours ? Hours : 12;
         Minutes = Minutes < 10 ? "0" + Minutes : Minutes
         let temetable = Hours + ":" + Minutes + " " + AmPM;
        

        data[number].notesarr.push({time : temetable, datemonth : tempdate, data : text})
        setdata([...data])
        // Reset
        settext("")
    }
    useEffect(()=> {
        localStorage.setItem("groupdata", JSON.stringify(data))
    }, [data[number]?.notesarr])

    return number != null? (
        <div className="Selected_Container" style={selected ? {display:"none"}:{display:"flex"}}>

               {/*  upper  div */}
           <div className="Upper">
            <img src={leftarrow} alt="" onClick={()=>setselected(true)}/>
                <div className="group">
                    <div className="groupicon">
                        <img src={data[number]?.groupcolor} alt="" />
                        <h3>{data[number]?.groupname.slice(0, 2).toUpperCase()}</h3>
                    </div>
                    <div className="groupname">{data[number]?.groupname}</div>
                </div>
           </div>
              
                {/*  center   div */} 
           <div className="center">
            {
                data[number].notesarr.map(note => {
                    return(
                        <div className="note">
                            <div className="notetiming">
                                <p style={{margin: '0px'}}>{note?.time}</p>
                                <p style={{margin: '0px'}}>{note?.datemonth}</p>
                            </div>
                            <div className="notedetail">
                                {note?.data}
                            </div>
                        </div>
                    )
                })
            }
           </div>
           <div className="bottom">
            <img src={submit} alt="" onClick={sendData} style={{cursor:"pointer"}}
            />
            <textarea placeholder="Enter your text here..........."
            onChange={
                (e)=>{
                    if(e.target.value.charCodeAt(0) != 10) settext(e.target.value)
                }
            
            } value={text}
            onKeyDown={(e) =>{
                    if(e.key === "Enter"){
                        sendData()
                    } 
                }
            }
            />
           </div>
        </div>
    )
    :
    (
        <div className="backdrop" style={{display:"none"}}>
            <img src={backgroundimg} alt="" />
            <h2>Pocket Notes</h2>
            <p>Send and receive messages without keeping your phone online.
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
            <div>
                <img src={lock} alt="" />
                <span>end-to-end encrypted</span>
            </div>
        </div>
    )
}

export default Selected_Componenst;