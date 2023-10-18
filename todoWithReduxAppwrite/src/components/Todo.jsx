/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeFromStore } from "../features/todoSlice";

function Todo({ id, content }) {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(removeFromStore({ id }));
  };

  return (
    <div className="w-80 px-4 py-1 mx-10 flex justify-between bg-gray-300 rounded-xl hover:bg-gray-400 cursor-pointer">
      <p>{content}</p>
      <button
        onClick={deleteTodo}
        className="text-red-500 font-bold hover:text-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
