import Card from "../card";
import project from "../projectdata/data";

const ProjectsPages = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {project.map((proj, index) => (
        <Card key={index}>
          <div className="w-full h-[200px] rounded-[20px] overflow-hidden border-[2px] border-[gray]">
            <img
              src={proj.desktop}
              alt={proj.projectName}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-white mt-4 text-center text-lg font-bold">
            {proj.projectName}
          </h3>
          <p className="text-white text-sm mt-2 text-center">
            {proj.description}
          </p>
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[white] block mt-4 text-center"
          >
            Visit Project
          </a>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsPages;
