import styled from '@emotion/styled';

const IntroduceInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 12px 0;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
`;

interface IntroduceProps {
  onInputIntroduce: (e: any) => void;
}

function Introduce({ onInputIntroduce }: IntroduceProps) {
  return (
    <IntroduceInput
      id='introduce'
      name='introduce'
      placeholder='회원님의 소개를 간단하게 입력해주세요'
      autoComplete='off'
      onChange={onInputIntroduce}
    />
  );
}
export default Introduce;
