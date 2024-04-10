import "./TodoItem.css";
import CompleteIcon from "./CompleteIcon.png";
import DeleteIcon from "./DeleteIcon.png";

function TodoItem(props) {
    return (
      <li className="container--items">
        <span>
          <img className="completeIcon" src={CompleteIcon} alt="Complete" />
          </span>
        <p>{props.text}</p>
        <span><img className="deleteIcon" src={DeleteIcon} alt="Delete" /></span>
      </li>
    );
  }
  export { TodoItem };