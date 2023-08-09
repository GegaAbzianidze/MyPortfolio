import Projects from "../Components/Projects/Projects";
import Technologies from "../Components/Technologies";
import WorkTimeline from "../Components/WorkTimeline";
import Landing from "../Components/Landing";
import GetInTouch from "../Assets/GetInTouch";

const Home = () => {
  return (
    <>
      <Landing />
      <Technologies />
      <Projects />
      <WorkTimeline />
      <GetInTouch />
    </>
  );
};

export default Home;
