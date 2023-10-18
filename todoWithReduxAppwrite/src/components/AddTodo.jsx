import { useDispatch } from "react-redux";
import { addToStore } from "../features/todoSlice";
import { useState } from "react";

function AddTodo() {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const addTodo = async () => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
    };

    if (todoText) dispatch(addToStore(newTodo));

    setTodoText("");
  };
  return (
    <div className="bg-gray-100 p-6 rounded-2xl">
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add Todo"
        className="p-1 border border-black rounded-l"
        type="text"
      />
      <button
        onClick={addTodo}
        className="mx-4 px-2 bg-pink-500 text-white rounded-l border border-black cursor-pointer hover:bg-pink-600"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
