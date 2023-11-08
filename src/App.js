import { useEffect, useState } from 'react';
import './App.css';
import NoteCategory from './components_All/Note_Components';
import SelectedNote from './components_All/Selected_Components';
import color1 from "./images-all/color1.png"
import { colordata } from "./components_All/Conts";


function App() {

  const[toggle, settoggle] = useState(false)
  const[data, setdata] = useState(JSON.parse(localStorage.getItem("groupdata")) || [])
  const[groupname, setgroupname] = useState("")
  const[groupcolor, setgroupcolor] = useState(color1)
  const[number, setnumber] = useState(null)
  const[selected, setselected] = useState(true)

  

  let Upper_Center_Toggle = "Upper";
  function Upper(){
    if(Upper_Center_Toggle == "center") settoggle(true)
    else if(Upper_Center_Toggle == "Upper") settoggle(false)
    Upper_Center_Toggle = "Upper"
  }
  function Center(){
    if(Upper_Center_Toggle == "create") Upper_Center_Toggle = "Upper"
    else Upper_Center_Toggle = "center"
  }

  function CreategroupName(){
    if(groupname){
      setdata([...data, {groupname : groupname, groupcolor : groupcolor, notesarr : []}])
    }
    else{
      setdata([...data, {groupname : "New Note", groupcolor : groupcolor, notesarr : []}])
    }
    setgroupname("")
    setgroupcolor(color1)
    Upper_Center_Toggle = "create"
  }
  useEffect(()=>{
    localStorage.setItem("groupdata", JSON.stringify(data))
  }, [data])
  return (
   <div className="Main_Container">
    {/*  Import Components*/}
      <NoteCategory settoggle={settoggle} toggle={toggle} 
      data = {data}
      setnumber = {setnumber} number={number}
       selected = 
      {selected}
      setselected = {setselected}
      />

       {/*  Import Components*/}
      <SelectedNote data = {data} number = {number} 
      setdata = {setdata}
      selected={selected}
       setselected={setselected}
      />
      <div className='Note-toggle-container' style={toggle ? {}:{display:"none"}} onClick={Upper}>
        <div className='Note-toggle' onClick={Center}>
            <h2>Create New Notes group</h2>
            <div className="Group_Name_Container">
                <h3>Group Name</h3>
                <input type="text" placeholder="Enter your group name..."
                onChange={(e)=>setgroupname(e.target.value)}
                value={groupname}
                />
            </div>

            {/* color container*/}
            <div className="Color_Container">
                <h3>Choose colour</h3>
                {
                  colordata.map(color => {
                    return(
                      <img src={color.img} onClick={()=>setgroupcolor(color.img)}></img>
                    )
                  })
                }
            </div>
            <button onClick={CreategroupName}>Create</button>
        </div>
      </div>
   </div>
  );
}

export default App;
