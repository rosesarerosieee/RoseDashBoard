import {
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Icons = {
  react: <SiReact color="#61DAFB" />, // React in blue
  css: <SiCss3 color="#264de4" />, // CSS3 in blue
  tailwind: <SiTailwindcss color="#38B2AC" />, // Tailwind CSS in teal
  firebase: <SiFirebase color="#FFCA28" />, // Firebase in yellow
  html5: <SiHtml5 color="#E34F26" />, // HTML5 in orange
  javascript: <SiJavascript color="#F7DF1E" />, // JavaScript in yellow
  arrowUp: <FontAwesomeIcon icon={faArrowUpRightFromSquare} color="white"></FontAwesomeIcon>
};

export default Icons;
