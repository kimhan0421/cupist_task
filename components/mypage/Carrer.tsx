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

const InformationInput = styled.input`
  font-size: 14px;
`;

interface CarrerProps {
  information: any;
}

function Carrer({ information }: CarrerProps) {
  return (
    <>
      <SectionBlock>
        <Title>직장</Title>
        <Explanation>
          {information.job ? (
            information.job
          ) : (
            <InformationInput name='introduce' placeholder='입력해주세요' />
          )}
        </Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>직업</Title>
        <Explanation>{information.company}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>학력</Title>
        <Explanation>{information.education}</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>학교</Title>
        <Explanation>
          {information.school ? (
            information.school
          ) : (
            <InformationInput name='introduce' placeholder='입력해주세요' />
          )}
        </Explanation>
      </SectionBlock>
    </>
  );
}

export default Carrer;
