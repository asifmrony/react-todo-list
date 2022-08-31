import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [finishedTodos, setFinishedTodos] = useState([]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Cart Feature Add",
      date: "July 25th at 10:00 am",
      remainder: false,
    },
    {
      id: 2,
      title: "Buy Grocery",
      date: "Aug 18th at 8:00 pm",
      remainder: false,
    },
    {
      id: 3,
      title: "AddaBaji",
      date: "Aug 16th at 7:00 am",
      remainder: true,
    },
    {
      id: 4,
      title: "Office Meeting",
      date: "Aug 20th at 11:00 am",
      remainder: false,
    },
    {
      id: 5,
      title: "Watching Movie",
      date: "Aug 19th at 7:00 pm",
      remainder: true,
    }
  ]); 

  // Add Task
  const addTodo = (task) => {
    const id = Math.floor(Math.random() * 10000);
    const newTodo = {id, ...task}
    setTodos([...todos, newTodo])
  }

  // Delete Todo
  const deleteTodo = (id) => {
    // console.log('delete', id);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Toggle Remainder
  const toggleRemainder = (id) => {
    console.log('toggle', id);
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, remainder: !todo.remainder } : todo));
  }

  //Add todos into finished todo when checkbox checked
  const sortFinishedTodos = (id) => {
    console.log(id);
    const justFinished = todos.filter((todo) => todo.id === id);
    setFinishedTodos([...finishedTodos, justFinished]);
    console.log(finishedTodos);
    // console.log(justFinished);
  }

  return (
    <div className="container mx-auto w-1/2 bg-[#28282B] text-white">
      {/* Header Container */}
      <Header />
      <div className="main p-5 relative">
        {/* blank todo add button */}
        <div className="add-todos-btn-container">
          <TodoAdd openModal = {setOpenModal} />
        </div>
        {/* Todo Popup add form */}
        {openModal && <AddTodo onAdd = {addTodo} closeModal = {setOpenModal}/>}
        <div className="todos space-y-4 h-[215px] max-h-[574px] overflow-x-hidden overflow-y-auto pr-4 grid place-items-center">
          {todos.length > 0 ? 
            <Todos todos = {todos} onDelete = {deleteTodo} onToggle ={toggleRemainder} onFinishedTodos = {sortFinishedTodos}/> :
              <div className="text-center">No Tasks to show</div>}          
        </div>
        <div className="mt-5 w-full h-[1px] bg-gray-700"></div>
        <h4 className='text-center'>Finished Todos'</h4>
        {/* FInished Todos will be here */}
        <div className="finished-todos space-y-4 overflow-x-hidden overflow-y-auto h-[100px]">  
          {/* Single Finished Todo     */}
          <div className='rounded-lg py-2 px-4 border border-gray-600 mt-4 line-through opacity-40'>
            <div className="todo__content flex items-center space-x-7">
                <input className='w-5 h-5' type="checkbox" name="" id="" />
                <div>
                    <h3>Something</h3>
                    <p>At a Certain point of time</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
