import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { Spin } from "antd";

//layout assets
import Wrapper from "../Layouts/Wrapper";
import MainLayout from "../Layouts/MainLayout";

// pages
import HomePage from "../Pages";
import NotFoundPage from "../Pages/Error/404";

const RawExam = lazy(() => import("../Pages/RawExam"));
const HoldingExam = lazy(() => import("../Pages/HoldingExam"));
const ExamGenerator = lazy(() => import("../Pages/ExamGenerator"));

const loadingSpinner = (
  <Wrapper>
    <Spin />
  </Wrapper>
);

function App() {
  return (
    <Suspense fallback={loadingSpinner}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout asRoute={true} />}>
            <Route index element={<HomePage />} />
            <Route path="/raw-exam" element={<RawExam />} />
            <Route path="/holding-exam" element={<HoldingExam />} />
            <Route path="/exam-generator" element={<ExamGenerator />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
