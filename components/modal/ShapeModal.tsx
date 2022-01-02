import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';

import ProfileStoreProps from '../../store/Profile';

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

const OptionSelect = styled.select`
  color: ${props => props.theme.colors.black};
  font-size: 13px;
  line-height: 22px;
  width: 80%;
  height: 44px;
  padding-right: 16px;
  padding-left: 10px;
  border: 0;
  border-radius: 6px;
  outline: none;
  margin: 10px auto;
  margin-bottom: 16px;
  cursor: pointer;
`;

const OptionList = styled.option`
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const shpeOption = [
  { value: 'thin', label: '마른' },
  { value: 'slim', label: '슬림' },
  { value: 'ordinary', label: '보통' },
  { value: 'volume', label: '다소 볼륨' },
  { value: 'glamour', label: '글래머' },
  { value: 'chubby', label: '통통' },
];

interface ShapeModalProps {
  close: any;
  ProfileStore: ProfileStoreProps;
}

function ShapeModal({ close, ProfileStore }: ShapeModalProps) {
  useEffect(() => {
    ProfileStore.getIntroduce();
  }, [ProfileStore]);

  const handleChange = (e: any) => {
    ProfileStore.modifyShape(e.target.value);
  };

  const onCloseModal = () => {
    close();
  };

  return (
    <ModalLayout>
      <Title>체형</Title>
      <SectionHr />
      <OptionSelect onChange={handleChange}>
        {shpeOption.map(option => (
          <OptionList key={option.value} value={option.value}>
            {option.label}
          </OptionList>
        ))}
      </OptionSelect>
      <Close onClick={onCloseModal}>변경하기</Close>
    </ModalLayout>
  );
}

export default inject('ProfileStore')(observer(ShapeModal));
