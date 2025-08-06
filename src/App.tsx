import { BrowserRouter, Routes, Route } from "react-router";
import styled from "styled-components";
import useIsMobile from "./hooks/useIsMobile";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";

const StyledDesktopErrorCnt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const isMobile = useIsMobile();
  return (
    isMobile ?
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>:
    <StyledDesktopErrorCnt>
      <h1>모바일 기기에서만 호환합니다.</h1>
    </StyledDesktopErrorCnt>
  );
}

export default App;
