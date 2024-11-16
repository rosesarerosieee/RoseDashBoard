import { useState } from "react";
import Card from "../components/card";
import project from "../components/projectdata/data";
import Icons from "../assets/icons/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkButton from "../components/darkbutton";

const ProjectPages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDarkMode, setisDarkMode] = useState(false);

  const darkModeToggle = () => {
    setisDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`w-full h-full ${
        isDarkMode
          ? "bg-[black] text-[lightpink]"
          : "bg-[lightpink] text-[black]"
      }`}
    >
      <DarkButton onToggleDarkMode={darkModeToggle} />
      <div className="flex flex-wrap gap-4 justify-center items-center xl:grid xl:grid-cols-3 xl:place-items-center p-[100px]">
        {project.map((proj, index) => (
          <Card key={index} isDarkMode={isDarkMode}>
            <div
              className="w-full h-[250px] rounded-[10px] overflow-hidden border-[3px] border-[lightpink] mb-[20px] relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white p-[20px] text-pretty h-full animate-pop-up">
                  <p className="text-sm px-2 mb-4">{proj.description}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline hover:text-white"
                  >
                    Visit here
                  </a>
                </div>
              ) : (
                <img
                  src={proj.desktop}
                  alt={proj.projectName}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="w-full text-center mb-4">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-extrabold flex items-center justify-center gap-2 p-2  text-pretty rounded-lg hover:text-[lightblue] hover:underline"
              >
                {proj.projectName}
                {Icons.arrowUp}
                <span className="text-cyan-400"></span>
              </a>
            </div>
            <div className="w-full text-center mb-4 z-[9999]  font-extrabold text-[2rem] flex items-center justify-center flex-row gap-[20px]">
              {proj.Icons.map((iconName) => (
                <span key={iconName} className="">
                  {Icons[iconName]}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectPages;
