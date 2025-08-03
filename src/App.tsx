import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import SignIn from "./pages/LogIn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
