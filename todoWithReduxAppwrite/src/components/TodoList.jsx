import { Todo } from "../components";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  return (
    <div className="my-8 bg-gray-100 rounded-2xl p-2">
      {todos?.map((todo) => (
        <div className="my-2" key={todo.id}>
          {todo && <Todo content={todo.text} id={todo.id} />}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
