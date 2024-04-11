import "./TodoItem.css";
import UncompleteIcon from "../../assets/UncompleteIcon.png";
import CompleteIcon from "../../assets/CompleteIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.png";
import DeleteIconRed from "../../assets/DeleteIconRed.png";

function TodoItem(props) {
  return (
    <li className="container--items">
      <img className="completeIcon" src={props.completed ? CompleteIcon : UncompleteIcon} alt="Uncomplete" />

      <p>{props.text}</p>
      <img className="deleteIcon" src={props.completed ? DeleteIconRed : DeleteIcon} alt="Delete" />
    </li>
  );
}
export { TodoItem };
