import React from 'react'
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";

function TodoAdd() {
  return (
    <IconContext.Provider value={{ className: "text-3xl bg-gray-600 rounded-full color-white" }}>
        <div className="todo-add flex justify-center items-center">
            <div className="cursor-pointer"> 
            <AiOutlinePlus />
            <span className="mt-2 uppercase font-semibold tracking-wide text-gray-400 inline-block">Add</span>
            </div>
        </div>
    </IconContext.Provider>
  )
}

export default TodoAdd


