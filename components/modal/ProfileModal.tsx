import styled from '@emotion/styled';

import { profileData } from './data/ProfileData';

const ProfileImg = styled.img`
  cursor: pointer;
  background-size: 100%;
  width: 115px;
  height: 115px;
  margin: 4px;
`;

interface ProfileModalProps {
  close: any;
}

function ProfileModal({ close }: ProfileModalProps) {
  const onCloseModal = () => {
    close();
  };

  return (
    <>
      {profileData.map(item => (
        <ProfileImg src={item.img} onClick={onCloseModal} key={item.img} />
      ))}
    </>
  );
}

export default ProfileModal;
