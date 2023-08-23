import "./App.css";
import Loading from "./Assets/Loading";
import NavBar from "./Components/NavBar";
import { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";

const Home = lazy(() => import("./Pages/Home"));
const CV = lazy(() => import("./Pages/CV"));

ReactGA.initialize("G-4T2K7C0FRH");

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className=" no-auto">
        <Router>
          <Suspense fallback={<Loading />}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/CV" element={<CV />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
