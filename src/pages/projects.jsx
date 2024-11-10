import { useState } from "react";
import Card from "../components/card";
import project from "../components/projectdata/data";
import Icons from "../assets/icons/icon";
import { icon } from "@fortawesome/fontawesome-svg-core";

const ProjectPages = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap gap-4 justify-center xl:grid xl:grid-cols-3 xl:p-[200px]">
      {project.map((proj, index) => (
        <Card key={index}>
          <div
            className="w-full h-[250px] rounded-lg overflow-hidden border-2 border-gray-500 mb-4 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white p-4 h-full">
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
              className="text-white text-lg font-extrabold flex items-center justify-center gap-2 bg-gray-700 p-2 rounded-lg hover:bg-gray-600"
            >
              {proj.projectName}
              <span className="text-cyan-400">→</span>
            </a>
          </div>
          <div className="w-full text-center mb-4 z-[9999]  font-extrabold text-[2rem] flex items-center justify-center flex-row gap-[20px]">
            {proj.Icons.map((iconName) => (
              <span key={iconName} className="">{Icons[iconName]}</span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectPages;
