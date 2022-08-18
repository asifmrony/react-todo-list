import React from 'react';
import { IconContext } from 'react-icons';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';

function Todo({ todo }) {
  return (
    <div className="todo shadow-lg rounded-lg py-3 px-7 flex justify-between items-center border border-gray-400 mt-4">
        <div className="todo__content flex items-center space-x-7">
            <input className='w-5 h-5' type="checkbox" name="" id="" />
            <div>
                <h3>{todo.title}</h3>
                <p>{todo.date}</p>
            </div>
        </div>
        <div className='flex space-x-3'>
            <IconContext.Provider value={{ className: "text-3xl bg-transparent rounded-full fill-blue-500 p-1 hover:fill-white hover:p-0 cursor-pointer hover:bg-[#005CC8] hover:ring-offset-2 hover:ring-offset-[#005CC8] ring-2 ring-[#005CC8]"}}>
                <IoIosNotificationsOutline />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "text-3xl bg-transparent rounded-full stroke-red-600 p-1 hover:stroke-white hover:p-0 cursor-pointer hover:bg-red-600 hover:ring-offset-2 hover:ring-offset-red-600 ring-2 ring-red-600"}}>
                <IoTrashOutline />
            </IconContext.Provider>
        </div>
    </div>
  )
}

export default Todo