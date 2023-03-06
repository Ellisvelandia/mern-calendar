import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPages } from "../auth";
import { CalendarPage } from "../calendar";

const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="/auth/*" element={<LoginPages />} />
      ) : (
        <Route path="/*" element={<CalendarPage />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default AppRouter;
