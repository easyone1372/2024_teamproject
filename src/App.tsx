import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoPage from "./InfoPage/InfoOrganism/InfoPage";

function App() {
  const storeId = 1;

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/information" element={<InfoPage />} />
        </Routes>
      </Router> */}
      <InfoPage storeId={storeId} />
    </div>
  );
}

export default App;
