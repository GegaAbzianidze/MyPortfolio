import "./App.css";
import GetInTouch from "./Components/GetInTouch";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects/Projects";
import Technologies from "./Components/Technologies";
import WorkTimeline from "./Components/WorkTimeline";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Technologies />
      <Projects />
      <WorkTimeline />
      <GetInTouch />
    </>
  );
}

export default App;
