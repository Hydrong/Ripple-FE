import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import Landing from "./pages/Landing";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
