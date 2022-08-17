import './App.css';
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import Todos from "./components/Todos";

function App() {
  const todos = [
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
      title: "AddBaji",
      date: "Aug 16th at 7:00 am",
      remainder: true,
    },
    {
      id: 3,
      title: "AddBaji",
      date: "Aug 16th at 7:00 am",
      remainder: true,
    },
    {
      id: 3,
      title: "AddBaji",
      date: "Aug 16th at 7:00 am",
      remainder: true,
    }
  ];

  return (
    <div className="container mx-auto w-1/2 bg-[#28282B] text-white">
      {/* Header Container */}
      <Header />
      <div className="main p-5 min-h-screen app-main">
        {/* blank todo add button */}
        {todos.length < 1 && <TodoAdd />}
        <form action="#">
          <input type="text" name="tasktitle" id="taskTitle" className='mb-4' />
          <input type="text" name="taskdate" id="taskDate" />
          <div>
            <label htmlFor="taskReminder">
              <input type="checkbox" name="taskremainder" id="taskReminder" className='mr-2'/>
              Turn on Reminder
            </label>
          </div>
        </form>
        <div className="todos space-y-4 h-[383px] max-h-[574px] overflow-x-hidden overflow-y-auto pr-4">
          <Todos todos = {todos}/>          
        </div>
        <div className="mt-5 w-full h-[1px] bg-gray-700"></div>
        {/* FInished Todos will be here */}
        {/* <div className="finished-todos space-y-4 overflow-x-hidden overflow-y-auto">
          <Todos todos = {todos}/>
        </div> */}
      </div>
    </div>
  );
}

export default App;
