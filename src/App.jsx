import "./App.css";
import Loading from "./Assets/Loading";
import NavBar from "./Components/NavBar";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const CV = lazy(() => import("./Pages/CV"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/CV" element={<CV />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
