import "./CreateTodoButton.css";
import PlusIcon from "../../assets/PlusIcon.png";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="container--button"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <span>
        <img
          className="button__icon"
          src={PlusIcon}
          alt="Boton de Agregar Tarea"
        />
      </span>
    </button>
  );
}
export { CreateTodoButton };
