import "./TodoItem.css";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="container--items">
      <FaCheck
        className={`completeIcon ${
          props.completed ? "text-green" : "text-gray"
        }`}
        onClick={props.onComplete}
      />

      <p>{props.text}</p>

      <ImCross
        className={`deleteIcon ${props.completed ? "text-red" : "text-gray"}`}
        onClick={props.onDelete}
      />
    </li>
  );
}
export { TodoItem };
