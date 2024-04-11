import "./CreateTodoButton.css";
import PlusIcon from "../../assets/PlusIcon.png";

function CreateTodoButton() {
    return (
    <button className="container--button">
      <span>
        <img className="button__icon" src={PlusIcon} alt="Boton de Agregar Tarea" />
        </span>
        </button>
    );
  }
  export { CreateTodoButton };