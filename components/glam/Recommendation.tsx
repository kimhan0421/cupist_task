import styled from '@emotion/styled';

import RecommendateionDetail from './RecommendateionDetail';
import RecommendationData from './data/RecommendationData';

const Block = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 18px 12px;
`;

const TitleDiv = styled.div`
  font-size: 20px;
  line-height: 22px;
  font-weight: 600;
`;

const SubBlock = styled.div`
  margin: 24px 14px;
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
          <RecommendateionDetail item={item} key={item.title} />
        ))}
      </SubBlock>
      <MoreButton>30개 항목 모두 보기</MoreButton>
    </Block>
  );
}

export default Recommendation;
