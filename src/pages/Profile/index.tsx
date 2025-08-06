import styled from "styled-components";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import settingsImg from "../../assets/icons/settings.svg";
import Navbar from "../../components/Navbar";

const StyledCnt = styled.div`
  width: 375px;
  height: 100vh;
  margin: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.div`
  background-color: #222;
  color: white;
  display: flex;
  height: 85px;
  justify-content: space-between;
  align-items: center;
  padding: 22px 27px;
`;
const StyledUsername = styled.div`
  font-size: 32px;
  line-height: 39;
`;
const StyledSettingBtn = styled.img.attrs({ src: settingsImg })`
  height: 30px;
  width: 30px;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
`;
const ProfileSection = styled.div`
  display: flex;
  height: 124px;
  padding: 12px 21px;
  gap: 15px;
  align-items: center;
`;
const ProfileImage = styled.div<{ img?: string }>`
  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : "url(https://avatar.iran.liara.run/public)"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100px;
  width: 100px;
  outline: 3px solid black;
  border-radius: 1000px;
`;
const ProfileInfoItem = styled.div`
  width: 63px;
  height: 41px;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
`;
const ScrollArea = styled.div`
  overflow: auto;
  flex-grow: 1;
  padding-bottom: 160px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE & Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;
const ReplySection = styled.div`
  padding: 12px 21px;
`;
const ReplyItem = styled.div``;
const FeedSection = styled.div`
  padding: 12px 21px;
`;
const FeedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`;
const FeedItem = styled.div`
  aspect-ratio: 1 / 1;
  background: #eee;
`;
const SectionTitle = styled.h2``;
const NavbarWrapper = styled.div`
  min-height: 80px;
  transform: translateY(-160px);
`;

const Profile = () => {
  const navigator = useNavigate();
  const { username } = useParams<{ username: string }>();
  const [profileImgSrc, setProfileImgSrc] = useState<string>();
  const [replies, setReplies] = useState<string[]>([
    "와 진짜 재밌어요",
    "ㄴㄴ 그건 아님",
    "안녕하세요 팬이에요",
  ]);
  const [feeds, setFeeds] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  function getUserInfo(username: string) {
    console.log(`${username}의 정보를 요청합니다.`);
    return {
      displayName: "임시이름",
      profileImgSrc:
        "https://res.cloudinary.com/dakcrgcnt/image/upload/v1754237963/testprofileimage.png",
    };
  }

  useEffect(() => {
    if (username) {
      // 사용자 정보 요청
      const { displayName, profileImgSrc } = getUserInfo(username);

      // 프로필 이미지 반영
      setProfileImgSrc(profileImgSrc);

      // 탭 제목 반영
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
        <StyledSettingBtn onClick={() => navigator("/settings")} />
      </StyledHeader>
      <StyledContent>
        <ProfileSection>
          <ProfileImage img={profileImgSrc} />
          <ProfileInfoItem>
            게시
            <br />
            {5}
          </ProfileInfoItem>
          <ProfileInfoItem>
            팔로워
            <br />
            {12}
          </ProfileInfoItem>
          <ProfileInfoItem>
            팔로잉
            <br />
            {32}
          </ProfileInfoItem>
        </ProfileSection>
        <ScrollArea>
          <ReplySection>
            <SectionTitle>최근 활동</SectionTitle>
            {replies.map((reply, i) => (
              <ReplyItem key={i}>{reply}</ReplyItem>
            ))}
          </ReplySection>
          <FeedSection>
            <SectionTitle>피드</SectionTitle>
            <FeedWrapper>
              {feeds.map((feed, i) => (
                <FeedItem key={i}>{feed}</FeedItem>
              ))}
            </FeedWrapper>
          </FeedSection>
        </ScrollArea>
      </StyledContent>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
    </StyledCnt>
  );
};

export default Profile;
