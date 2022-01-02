import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { SetStateAction, useEffect, useState } from 'react';

import icLock from '../../images/ic-lock.svg';
import ProfileStoreProps, { IntroduceProps } from '../../store/Profile';
import Introduce from './Introduce';
import Body from './Body';
import Character from './Character';
import Carrer from './Carrer';

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
  border: 2px solid ${props => props.theme.colors.cobaltBlue};
  border-radius: 8px;
  padding: 8px 10px;
  color: ${props => props.theme.colors.cobaltBlue};
`;

interface BasicInformationProps {
  ProfileStore: ProfileStoreProps;
}

interface BasicProps {
  nickName: string;
  birthday: string;
}

interface BodyProps {
  height: string;
  shape: string;
}

interface CareerProps {
  job: string;
  company: string;
  education: string;
  school: string;
}

interface CharacterProps {
  personality: string[];
  religion: string;
  drinking: string;
  smoking: string;
  bloodType: string;
  race: string;
}

function BasicInformation({ ProfileStore }: BasicInformationProps) {
  const [information, setInformation] = useState<IntroduceProps>();
  const [basic, setBasic] = useState<BasicProps>();
  const [introduce, setIntroduce] = useState('');
  const [career, setCareer] = useState<CareerProps>();
  const [character, setCharacter] = useState<CharacterProps>();

  useEffect(() => {
    ProfileStore.getIntroduce();
    setInformation(ProfileStore.introduce);
  }, [ProfileStore]);

  const onInputIntroduce = (e: { target: { value: SetStateAction<string> } }) => {
    setIntroduce(e.target.value);
  };

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
        <Introduce onInputIntroduce={onInputIntroduce} />
        <IntroduceDiv>SNS 등 연락처 입력 시 서비스 이용 제한됩니다</IntroduceDiv>
      </SectionTitleBlock>
      <SectionHr />
      <Body information={information} ProfileStore={ProfileStore} />
      <SectionHr />
      <Carrer information={information} />
      <SectionHr />
      <Character information={information} />
      <SectionHr />
      <SectionTitleBlock>
        <BottomTitle>매력 포인트</BottomTitle>
        <BottomDiv>
          {information.charmPoint.map(item => (
            <BottomBox key={item}>{item}</BottomBox>
          ))}
        </BottomDiv>
      </SectionTitleBlock>
      <SectionTitleBlock>
        <Title>관심사</Title>
        <Explanation>
          {information.interest ? information.interest : <LifeInputDiv>입력해주세요</LifeInputDiv>}
        </Explanation>
      </SectionTitleBlock>
      <SectionTitleBlock>
        <Title>라이프 스타일</Title>
        {information.lifestyle ? (
          <Explanation>{information.lifestyle}</Explanation>
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
