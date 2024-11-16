import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkButton = ({onToggleDarkMode}) => {
  return (
    <button
      onClick={onToggleDarkMode}
      className="fixed top-4 right-4 bg-lightpink p-3 rounded-full shadow-md hover:bg-lightblue transition z-[9999999]"
    >
      <FontAwesomeIcon icon={faMoon} className="text-2xl text-white" />
    </button>
  );
};

export default DarkButton;
