import Projects from "../Components/Projects/Projects";
import Technologies from "../Components/Technologies";
import WorkTimeline from "../Components/WorkTimeline";
import Landing from "../Components/Landing";
import GetInTouch from "../Assets/GetInTouch";
import Articles from "../Components/Articles/Articles";

const Home = () => {
  return (
    <>
      <Landing />
      <Technologies />
      <Projects />
      <WorkTimeline />
      <Articles />
      <GetInTouch />
    </>
  );
};

export default Home;
