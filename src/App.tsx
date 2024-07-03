import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoPage from "./InfoPage/InfoOrganism/InfoPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/information" element={<InfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
