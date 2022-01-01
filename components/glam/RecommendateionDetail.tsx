import styled from '@emotion/styled';
import { useState } from 'react';

import Potal from '../modal/Portal';
import ResearchModal from '../modal/RecomModal';

import RecommendationData from './data/RecommendationData';

const SubWapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 325px;
  justify-content: space-between;
  padding-top: 32px;
  :first-of-type {
    padding-top: 26px;
  }
`;

const SubFlex = styled.div`
  display: flex;
`;

const IconToday = styled.img`
  background-size: 100%;
  width: 23px;
  height: 23px;
`;

const SubDiv = styled.div`
  margin-left: 14px;
  font-size: 13px;
  line-height: 2;
`;

const SubButton = styled.button`
  width: 71px;
  height: 25px;
  background: ${props => props.theme.colors.cyanBlue};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  justify-items: center;
`;

const Hot = styled.div`
  margin-top: 6px;
  margin-left: 4px;
  font-size: 8px;
  background: ${props => props.theme.colors.magenta};
  color: ${props => props.theme.colors.white};
  padding: 2px 6px;

  border-radius: 8px;
  width: 28px;
  height: 12px;
`;

interface RecommendateionDetailProps {
  item: RecommendationData;
}

function RecommendateionDetail({ item }: RecommendateionDetailProps) {
  const [open, setOpen] = useState<boolean>(false);

  const onOpenModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <SubWapper key={item.title}>
        <SubFlex>
          <IconToday src={item.img} />
          <SubDiv>{item.title}</SubDiv>
          {item.hot ? <Hot>HOT</Hot> : null}
        </SubFlex>
        <SubButton onClick={onOpenModal}>선택</SubButton>
      </SubWapper>
      {open && (
        <Potal>
          <ResearchModal close={onOpenModal} title={item.title} />
        </Potal>
      )}
    </>
  );
}

export default RecommendateionDetail;
