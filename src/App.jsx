import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/asa-mangaon" element={<Page2 />} />
          <Route path="/asa-na-mall" element={<Page3 />} />
          <Route path="/thanks" element={<Page4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
