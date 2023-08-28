import "./App.css";
import Loading from "./Assets/Loading";
import NavBar from "./Components/NavBar";
import { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./Pages/Home"));
const CV = lazy(() => import("./Pages/CV"));

class App extends Component {
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

        <Analytics />
      </div>
    );
  }
}

export default App;
