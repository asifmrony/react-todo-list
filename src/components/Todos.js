import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IconContext } from "react-icons";

function Todos({ todos }) {
  return (
    <>
        {todos.map((todo) => (
            <div key={todo.id} className="todo shadow-lg rounded-lg py-3 px-7 flex justify-between items-center border border-gray-400">
            <div className="todo__content flex items-center space-x-7">
                <input className='w-5 h-5' type="checkbox" name="" id="" />
                <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.date}</p>
                </div>
            </div>
            <div>
                <IconContext.Provider value={{ className: "text-3xl bg-gray-600 rounded-full color-white cursor-pointer hover:bg-[#005CC8] hover:ring-offset-2 hover:ring-offset-[#005CC8] ring-2 ring-[#005CC8]"}}>
                    <IoIosNotificationsOutline />
                </IconContext.Provider>
            </div>
            </div>
        ))
        }
    </>
  )
}

export default Todos