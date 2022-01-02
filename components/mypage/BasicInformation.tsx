import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';

import icLock from '../../images/ic-lock.svg';
import { IntroduceProps } from '../../store/Profile';

import Body from './Body';
import Carrer from './Carrer';
import Character from './Character';
import Introduce from './Introduce';

const SectionBlock = styled.div`
  display: flex;
  padding: 10px 0;
`;

const SectionTitleBlock = styled.div`
  padding: 10px 0;
`;

const Title = styled.div`
  width: 120px;
  font-size: 15px;
  line-height: 20px;
`;

const BottomTitle = styled.div`
  font-size: 15px;
  padding: 4px 0 16px;
`;

const Gender = styled.div`
  color: ${props => props.theme.colors.black};
`;

const Explanation = styled.div`
  color: ${props => props.theme.colors.cyanBlue};
`;

const IconLock = styled.div`
  background: url(${icLock}) 0 center no-repeat;
  padding: 9px;
  width: 9px;
  height: 9px;
  margin-left: 2px;
`;

const SectionHr = styled.hr`
  background-color: ${props => props.theme.colors.snow};
  color: ${props => props.theme.colors.snow};
`;

const IntroduceDiv = styled.div`
  font-size: 11px;
  color: ${props => props.theme.colors.charcoalGrey};
`;

const LifeInputDiv = styled.div`
  padding: 12px 0;
  color: ${props => props.theme.colors.charcoalGrey};
`;

const BottomDiv = styled.div``;

const BottomBox = styled.span`
  word-break: keep-all;
  margin-right: 8px;
  border: 2px solid ${props => props.theme.colors.cyanBlue};
  border-radius: 8px;
  padding: 8px 10px;
  color: ${props => props.theme.colors.cyanBlue};
`;

interface BasicInformationProps {
  ProfileStore: any;
}

function BasicInformation({ ProfileStore }: BasicInformationProps) {
  const [information, setInformation] = useState<IntroduceProps>();

  useEffect(() => {
    ProfileStore.getIntroduce();
    setInformation(ProfileStore.introduce);
  }, [ProfileStore]);

  if (information === undefined) {
    return null;
  }

  return (
    <>
      <SectionBlock>
        <Title>닉네임</Title>
        <Explanation>{information.nickName}</Explanation>
        <IconLock />
      </SectionBlock>
      <SectionBlock>
        <Title>성별</Title>
        <Gender>{information.gender === 'female' ? '여성' : '남성'}</Gender>
      </SectionBlock>
      <SectionBlock>
        <Title>생일</Title>
        <Explanation>{information.birthday}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>위치</Title>
        <Explanation>{information.location}</Explanation>
      </SectionBlock>
      <SectionHr />
      <SectionTitleBlock>
        <Title>소개</Title>
        <Introduce ProfileStore={ProfileStore} />
        <IntroduceDiv>SNS 등 연락처 입력 시 서비스 이용 제한됩니다</IntroduceDiv>
      </SectionTitleBlock>
      <SectionHr />
      <Body ProfileStore={ProfileStore} />
      <SectionHr />
      <Carrer information={information} />
      <SectionHr />
      <Character information={information} />
      <SectionHr />
      <SectionTitleBlock>
        <BottomTitle>매력 포인트</BottomTitle>
        <BottomDiv>
          {information.charmPoint ? (
            information.charmPoint.map(item => <BottomBox key={item}>{item}</BottomBox>)
          ) : (
            <LifeInputDiv>입력해주세요</LifeInputDiv>
          )}
        </BottomDiv>
      </SectionTitleBlock>
      <SectionTitleBlock>
        <Title>관심사</Title>
        <Explanation>
          {information.interest ? (
            information.interest.map(item => <BottomBox key={item}>{item}</BottomBox>)
          ) : (
            <LifeInputDiv>입력해주세요</LifeInputDiv>
          )}
        </Explanation>
      </SectionTitleBlock>
      <SectionTitleBlock>
        <Title>라이프 스타일</Title>
        {information.lifestyle ? (
          information.lifestyle.map(item => <BottomBox key={item}>{item}</BottomBox>)
        ) : (
          <Explanation>
            <LifeInputDiv>입력해주세요</LifeInputDiv>
            <IntroduceDiv>라이프 스타일은 추천에 활용되며 공개되지 않습니다</IntroduceDiv>
          </Explanation>
        )}
      </SectionTitleBlock>
    </>
  );
}
export default inject('ProfileStore')(observer(BasicInformation));
