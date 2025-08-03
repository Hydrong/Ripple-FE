import styled from "styled-components";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import settingsImg from "../../assets/icons/settings.svg";

const BaseLayout = styled.div`
  padding: 10px;
`;
const StyledCnt = styled.div`
  width: 512px;
  margin: auto;
`;
const StyledHeader = styled(BaseLayout)`
  background-color: #222;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;
const StyledUsername = styled.div`
  font-size: 26px;
`;
const StyledSettingBtn = styled.img.attrs({ src: settingsImg })`
  height: 30px;
  width: 30px;
`;
const StyledContent = styled(BaseLayout)``;
const ProfileSection = styled.div`
  display: flex;
`;
const ProfileImage = styled.div<{ img?: string }>`
  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : "url(https://avatar.iran.liara.run/public)"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 50px;
  width: 50px;
`;
const StyledNavbar = styled(BaseLayout)``;

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const [profileImgSrc, setProfileImgSrc] = useState<string>();

  function getUserInfo(username: string) {
    console.log(`${username}의 정보를 요청합니다.`);
    return {
      displayName: "임시 사용자",
      profileImgSrc:
        "https://res.cloudinary.com/dakcrgcnt/image/upload/v1754237963/testprofileimage.png",
    };
  }

  useEffect(() => {
    if (username) {
      const { displayName, profileImgSrc } = getUserInfo(username);

      document.title = displayName
        ? `Ripple | ${displayName}의 프로필`
        : `Ripple | ${username}의 프로필`;
    } else {
      document.title = "Ripple | 알 수 없는 사용자";
    }
  }, []);

  return (
    <StyledCnt>
      <StyledHeader>
        <StyledUsername>{username}</StyledUsername>
        <StyledSettingBtn />
      </StyledHeader>
      <StyledContent>
        <ProfileSection>
          <ProfileImage img={profileImgSrc} />
        </ProfileSection>
      </StyledContent>
      <StyledNavbar></StyledNavbar>
    </StyledCnt>
  );
};

export default Profile;
