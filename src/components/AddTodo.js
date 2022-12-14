import React, { useState } from 'react';
import '../App.css';

function AddTodo ({ onAdd, closeModal })  {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [remainder, setRemainder] = useState(false)

  const onSubmit = (e) => {
    // Prevent defualt submitting behaviour
    e.preventDefault();
    //form title validation
    if(!title) {
      alert('Please add a Title');
      return;
    }

    onAdd({ title, date, remainder });

    setTitle('');
    setDate('');
    setRemainder(false);

    closeModal(false);
  }

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="px-4 py-4 modal-head flex justify-between items-center">
          <h5 className='text-2xl font-semibold'>Add New Todo</h5>
          <button 
            className='py-[3px] px-3 text-lg bg-transparent hover:bg-red-600 rounded-md'
            onClick={() => closeModal(false)}
            >
            X
          </button>
        </div>
        <div className="modal-body">
          <form action="#" onSubmit={onSubmit} className='px-4 py-5 mb-4 rounded-md focus:shadow-lg focus:shadow-cyan-500/50'>
            <input type="text" 
              name="tasktitle" 
              id="taskTitle" 
              className='mb-4 w-full h-10 rounded-lg px-4 py-2 placeholder:text-slate-400 text-slate-700' 
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
              type="text" 
              name="taskdate" 
              id="taskDate" 
              className='mb-4 w-full h-10 rounded-lg px-4 py-2 placeholder:text-slate-400 text-slate-700'  
              placeholder='Date and Time'
              value={date}
              onChange={(e) => setDate(e.target.value)}  
            />
              
            <div>
                <label htmlFor="taskReminder">
                    <input type="checkbox"
                      name="taskremainder" 
                      id="taskReminder" 
                      className='mr-2 h-4 w-4'
                      checked={remainder}
                      onChange={(e) => setRemainder(e.currentTarget.checked)}
                    />
                    Turn on Reminder
                </label>
            </div>
            <input type="submit" value="Submit"  className='w-full bg-blue-700 py-2 px-5 cursor-pointer rounded-lg mt-5'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTodo