import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import InfoPage from "./InfoPage/InfoOrganism/InfoPage";

function App() {
  const storeId = 1;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/information/:storeId" element={<InfoPage />} />
        </Routes>
        <Link to={`/information/${storeId}`}>
          <button>Go to InfoPage</button>
        </Link>
      </Router>
    </div>
  );
}

export default App;
