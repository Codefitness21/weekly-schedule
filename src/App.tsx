import { BrowserRouter, Route, Routes } from "react-router-dom";
import Austin from "./pages/Austin";
import BeeCave from "./pages/BeeCave";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/austin" element={<Austin />} />
        <Route path="/beecave" element={<BeeCave />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
