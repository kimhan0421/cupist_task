import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';

import ModalLayout from './ModalLayout';

const Title = styled.div`
  padding: 16px 0 8px;
  color: ${props => props.theme.colors.charcoalGrey};
  text-align: center;
`;

const SectionHr = styled.hr`
  background-color: ${props => props.theme.colors.snow};
  color: ${props => props.theme.colors.snow};
`;

const Close = styled.div`
  cursor: pointer;
  display: flex;
  width: 246px;
  height: 36px;
  background-color: ${props => props.theme.colors.cyanBlue};
  border-radius: 8px;
  margin: 0 14px 8px;
  padding: 9px;
  text-align: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
`;

const ModifyInput = styled.input`
  text-align: center;
  font-size: 14px;
  padding: 8px 0;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  margin: 8px 8px 8px 44px;
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

interface BodyModalProps {
  close: any;
  ProfileStore: any;
}

function BodyModal({ close, ProfileStore }: BodyModalProps) {
  const [modifyHeight, setModifyHeight] = useState<string>();

  useEffect(() => {
    ProfileStore.getIntroduce();
    setModifyHeight(ProfileStore.introduce.height);
  }, [ProfileStore]);

  const isModifyValue = (e: any) => {
    setModifyHeight(e.target.value);
  };

  const setHeightValue = () => {
    ProfileStore.modifyHeight(modifyHeight);
    close();
  };

  return (
    <ModalLayout>
      <Title>키</Title>
      <SectionHr />
      <ModifyInput id='height' name='height' value={modifyHeight || ''} onChange={isModifyValue} />
      cm
      <Close onClick={setHeightValue}>변경하기</Close>
    </ModalLayout>
  );
}

export default inject('ProfileStore')(observer(BodyModal));
