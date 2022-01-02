import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { useState } from 'react';

import Portal from '../components/modal/Portal';
import ProfileModal from '../components/modal/ProfileModal';
import BasicInformation from '../components/mypage/BasicInformation';
import ProfileStoreProps from '../store/Profile';

const TitleMessage = styled.div`
  margin: 16px auto;
  color: ${props => props.theme.colors.black};
  text-align: center;
`;

const ProfileFlex = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const SubMessage = styled.div`
  margin: 32px auto;
  justify-content: center;
  display: flex;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.colors.darkGray};
`;

const More = styled.a`
  cursor: pointer;
  margin-left: 8px;
  color: ${props => props.theme.colors.dimGray};
`;

const BaseImg = styled.div`
  background: url('/images/ic-person.png') no-repeat;
  background-size: 123px;
  width: 100%;
  height: 123px;
`;

const SectionHr = styled.hr`
  background-color: ${props => props.theme.colors.snow};
  color: ${props => props.theme.colors.snow};
`;

interface MyPageProps {
  ProfileStore: ProfileStoreProps;
}

function Mypage({ ProfileStore }: MyPageProps) {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  function isShowPhoto() {
    if (open) {
      return (
        <Portal>
          <ProfileModal close={onCloseModal} />
        </Portal>
      );
    }
    return <BasicInformation ProfileStore={ProfileStore} />;
  }
  return (
    <>
      <TitleMessage>프로필 수정</TitleMessage>
      <ProfileFlex>
        <BaseImg onClick={onOpenModal} />
        <BaseImg onClick={onOpenModal} />
        <BaseImg onClick={onOpenModal} />
      </ProfileFlex>
      <ProfileFlex>
        <BaseImg onClick={onOpenModal} />
        <BaseImg onClick={onOpenModal} />
        <BaseImg onClick={onOpenModal} />
      </ProfileFlex>
      <SubMessage>
        다양한 매력을 보여줄 수 있는 사진을 올려주세요
        <More
          target='_blank'
          href='https://cupist.notion.site/e90fb7d9144f45368e6849d99d345437'
          rel='noreferrer'
          title='회원님의 다양한 매력을 보여주세요'
        >
          더 알아보기
        </More>
      </SubMessage>
      <SectionHr />
      {isShowPhoto()}
    </>
  );
}

export default inject('ProfileStore')(observer(Mypage));
