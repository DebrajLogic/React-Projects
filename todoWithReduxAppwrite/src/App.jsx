import { AddTodo, TodoList } from "./components";

function App() {
  return (
    <div className="h-screen w-full my-8 flex flex-col justify-start place-items-center">
      <h1 className="bg-pink-600 w-full text-center text-white text-xl py-2 mb-10 rounded-lg">
        Todo App with Appwrite as Backend
      </h1>
      <div>
        <AddTodo />
        <h1 className="text-center mt-4">TODOS:</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
