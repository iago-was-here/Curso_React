import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <switch>
      <Routes>
        <Route path="/repositories" element={<RepositoriesPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </switch>

  );
}
