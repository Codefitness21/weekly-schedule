import { BrowserRouter, Route, Routes } from "react-router-dom";
import Austin from "./pages/Austin";
import BeeCave from "./pages/BeeCave";
import Home from "./pages/Home";
// import Modal from "./components/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/austin" element={<Austin />} />
        <Route path="/beecave" element={<BeeCave />} />
      </Routes>
      {/* <Modal /> */}
    </BrowserRouter>
  );
};

export default App;
