import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';

import ProfileStoreProps from '../../store/Profile';
import BodyModal from '../modal/BodyModal';
import Portal from '../modal/Portal';
import ShapeModal from '../modal/ShapeModal';

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
  cursor: pointer;
  color: ${props => props.theme.colors.cyanBlue};
`;

interface BodyProps {
  ProfileStore: ProfileStoreProps;
}

function Body({ ProfileStore }: BodyProps) {
  const [openHeight, setOpenHeight] = useState(false);
  const [openShape, setOpenShape] = useState(false);

  useEffect(() => {
    ProfileStore.getIntroduce();
  }, [ProfileStore]);

  const onHeightModal = () => {
    setOpenHeight(!openHeight);
  };

  const onShapeModal = () => {
    setOpenShape(!openShape);
  };

  function showLabel() {
    if (ProfileStore.introduce.shape === 'thin') {
      return <div>마른</div>;
    }
    if (ProfileStore.introduce.shape === 'slim') {
      return <div>슬림</div>;
    }
    if (ProfileStore.introduce.shape === 'volume') {
      return <div>다소 볼륨</div>;
    }
    if (ProfileStore.introduce.shape === 'glamour') {
      return <div>글래머</div>;
    }
    if (ProfileStore.introduce.shape === 'chubby') {
      return <div>통통</div>;
    }
    return <div>보통</div>;
  }

  return (
    <>
      <SectionBlock>
        <Title>키</Title>
        <Explanation onClick={onHeightModal}>{ProfileStore.introduce.height}cm</Explanation>
      </SectionBlock>
      <SectionBlock>
        <Title>체형</Title>
        <Explanation onClick={onShapeModal}>{showLabel()}</Explanation>
      </SectionBlock>
      {openHeight && (
        <Portal>
          <BodyModal close={onHeightModal} ProfileStore={ProfileStore} />
        </Portal>
      )}
      {openShape && (
        <Portal>
          <ShapeModal close={onShapeModal} ProfileStore={ProfileStore} />
        </Portal>
      )}
    </>
  );
}
export default inject('ProfileStore')(observer(Body));
