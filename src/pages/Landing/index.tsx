import styled from "styled-components";
import Navbar from "../../components/Navbar";

import rippleIconImg from "../../assets/ripple-icon.png";
import heartImg from "../../assets/icons/heart.svg";
import dmImg from "../../assets/icons/dm.svg";

const StyledCnt = styled.div`
  width: 512px;
  height: 100vh;
  margin: auto;
  position: relative;
`;
const StyledHeader = styled.div`
  background-color: #000;
  height: 80px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const StyledIcon = styled.img`
  height: 56px;
`;
const StyledRightShortcutWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const StyledRightShortcut = styled.img`
  height: 36px;
`;

const Landing = () => {
  return (
    <StyledCnt>
      <StyledHeader>
        <StyledIcon src={rippleIconImg} />
        <StyledRightShortcutWrapper>
          <StyledRightShortcut src={heartImg} />
          <StyledRightShortcut src={dmImg} />
        </StyledRightShortcutWrapper>
      </StyledHeader>
      <Navbar />
    </StyledCnt>
  );
};

export default Landing;
