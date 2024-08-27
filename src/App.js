import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FriendsPage from "./pages/FriendsPage";
import GuestsPage from "./pages/GuestsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<GuestsPage />}
        />
        <Route
          path="/friends"
          element={<FriendsPage />}
        />
        <Route
          path="/guests"
          element={<GuestsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
