import React from "react";
import InfoPage from "./InfoPage/InfoMolcules/InfoPageComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/information" element={<InfoPage />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
