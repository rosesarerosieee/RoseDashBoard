import Card from "../components/card";
import project from "../components/projectdata/data";

const ProjectPages = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {project.map((proj, index) => (
        <Card key={index}>
          <div className="w-full h-[150px] rounded-lg overflow-hidden border-2 border-gray-500 mb-4">
            <img
              src={proj.desktop}
              alt={proj.projectName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full text-center mb-4">
            <h1 className="text-white text-lg font-extrabold truncate h-[30px] flex items-center justify-center">
              {proj.projectName}
            </h1>
          </div>

          <div className="flex-grow w-full text-center overflow-hidden mb-4">
            <p className="text-white text-sm px-2 h-[60px] overflow-hidden">
              {proj.description}
            </p>
          </div>
          <div className="w-full text-center mt-auto">
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-white"
            >
              Visit here
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectPages;
