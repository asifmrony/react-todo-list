import { useState } from 'react'

function addTodo() {
  return (
    <form action="#" className='px-4 py-5 mb-4 border border-gray-400 rounded-md focus:shadow-lg focus:shadow-cyan-500/50'>
        <input type="text" name="tasktitle" id="taskTitle" className='mb-4 w-full h-10 rounded-lg px-4 py-2 placeholder:text-slate-400 text-slate-700' placeholder='Title' />
        <input type="text" name="taskdate" id="taskDate" className='mb-4 w-full h-10 rounded-lg px-4 py-2 placeholder:text-slate-400 text-slate-700'  placeholder='Date and Time'/>
        <div>
            <label htmlFor="taskReminder">
                <input type="checkbox" name="taskremainder" id="taskReminder" className='mr-2 h-4 w-4'/>
                Turn on Reminder
            </label>
        </div>
        <input type="submit" value="Submit"  className='w-full bg-blue-700 py-2 px-5 cursor-pointer rounded-lg mt-3'/>
    </form>
  )
}

export default addTodo