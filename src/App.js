import "./App.css";
import Card from "./components/card";
import ProjectPages from "./components/pages/projects";

function App() {
  return <div className="w-full h-screen flex flex-row items-center justify-center">
    <ProjectPages/>
  </div>;
}

export default App;
