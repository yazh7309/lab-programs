import { useState } from "react"

export default function Todocard(){
    const[tasks,setTasks]=useState();
    return(
        <div>
            <h1>TO-DO-List</h1>
            <input type="text" placeholder="Enter new task"onKeyUp/>
            <button>Add task</button>
            <div>NO tasks yet</div>
        </div>
    )
}