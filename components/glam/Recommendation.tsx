import styled from '@emotion/styled';
import { useState } from 'react';

import RecommendationData from './data/RecommendationData';

const Block = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 18px 12px;
`;

const TitleDiv = styled.div`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;

const SubBlock = styled.div`
  margin-top: 26px;
  margin-left: 14px;
`;

const SubWapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 293px;
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

const MoreButton = styled.button`
  margin-top: 24px;
  width: 340px;
  height: 42px;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  padding: 11px;
  text-align: center;
  justify-content: center;
`;
interface RecommendationProps {
  recommendationData: RecommendationData[];
}
function Recommendation({ recommendationData }: RecommendationProps) {
  return (
    <Block>
      <TitleDiv>맞춤 추천</TitleDiv>
      <SubBlock>
        {recommendationData.map((item: RecommendationData) => (
          <SubWapper key={item.title}>
            <SubFlex>
              <IconToday src={item.img} />
              <SubDiv>{item.title}</SubDiv>
              {item.hot ? <Hot>HOT</Hot> : null}
            </SubFlex>
            <SubButton>선택</SubButton>
          </SubWapper>
        ))}
      </SubBlock>
      <MoreButton>30개 항목 모두 보기</MoreButton>
    </Block>
  );
}

export default Recommendation;
