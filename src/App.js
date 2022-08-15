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
    }
  ];

  return (
    <div className="container mx-auto w-1/2 bg-[#28282B] text-white">
      {/* Header Container */}
      <Header />
      <div className="main p-5 min-h-screen app-main">
        {/* blank todo add button */}
        <TodoAdd />
        <div className="todos space-y-4">
          <Todos todos = {todos}/>          
        </div>
      </div>
    </div>
  );
}

export default App;
