import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeScreen from "./HomeScreen";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:user" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
