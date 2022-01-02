import styled from '@emotion/styled';

const SectionBlock = styled.div`
  display: flex;
  padding: 10px 0;
`;

const Title = styled.div`
  width: 120px;
  font-size: 15px;
  line-height: 20px;
`;

const Explanation = styled.div`
  color: ${props => props.theme.colors.cyanBlue};
`;

const RaceDiv = styled.div`
  color: ${props => props.theme.colors.charcoalGrey};
`;

interface CharacterProps {
  information: any;
}

function Character({ information }: CharacterProps) {
  return (
    <>
      <SectionBlock>
        <Title>성격</Title>
        <Explanation>{information.personality}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>종교</Title>
        <Explanation>{information.religion}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>음주</Title>
        <Explanation>{information.drinking}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>흡연</Title>
        <Explanation>{information.smoking}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>혈액형</Title>
        <Explanation>{information.bloodType}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>인종</Title>
        <Explanation>
          {information.race ? information.race : <RaceDiv>입력해주세요</RaceDiv>}
        </Explanation>
      </SectionBlock>
    </>
  );
}

export default Character;
