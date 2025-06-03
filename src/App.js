// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;