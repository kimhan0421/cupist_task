import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';

const IntroduceInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 12px 0;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
`;

interface IntroduceProps {
  ProfileStore: any;
}

function Introduce({ ProfileStore }: IntroduceProps) {
  useEffect(() => {
    ProfileStore.getIntroduce();
  }, [ProfileStore]);

  const isModifyValue = (e: any) => {
    ProfileStore.modifyIntroduce(e.target.value);
  };

  return (
    <IntroduceInput
      id='introduce'
      name='introduce'
      placeholder='회원님의 소개를 간단하게 입력해주세요'
      autoComplete='off'
      value={ProfileStore.introduce.introduce}
      onChange={isModifyValue}
    />
  );
}
export default inject('ProfileStore')(observer(Introduce));
