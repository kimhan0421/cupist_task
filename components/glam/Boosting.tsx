import styled from '@emotion/styled';

import icBoosting from '../../images/ic-boosting.svg';

const Block = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

const TopImg = styled.div`
  background: url('/images/ic-recom.png') center no-repeat;
  background-size: 100%;
  width: 100%;
  height: 400px;
  border-radius: 8px 8px 0px 0px;
`;

const CommentBlock = styled.div`
  padding: 16px;
`;

const CommentTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
`;

const CommentSub = styled.div`
  padding-top: 8px;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.charcoalGrey};
`;

const BoostingButton = styled.button`
  display: flex;
  width: 340px;
  height: 42px;
  background-color: ${props => props.theme.colors.cobaltBlue};
  border-radius: 8px;
  margin-bottom: 13px;
  margin-left: 14px;
  padding: 11px;
  text-align: center;
  justify-content: center;
`;

const BoostingTitle = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
`;

const BoostingPrice = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: ${props => props.theme.colors.steelBlue};
  margin-left: 8px;
  margin-top: 4px;
`;

const IconBoosting = styled.div`
  background: url(${icBoosting}) 0 center no-repeat;
  padding: 9px;
  width: 9px;
  height: 9px;
  margin-left: 2px;
`;

function Boosting() {
  return (
    <Block>
      <TopImg />
      <CommentBlock>
        <CommentTitle>빠르게 관심을 받아보세요</CommentTitle>
        <CommentSub>
          평소보다 2배 이상 회원님의 프로필을 등장시켜 <br /> 매력적인 상대를 많이 만날 수 있습니다
        </CommentSub>
      </CommentBlock>
      <BoostingButton>
        <BoostingTitle>프로필 부스팅</BoostingTitle>
        <BoostingPrice>150</BoostingPrice>
        <IconBoosting />
      </BoostingButton>
    </Block>
  );
}
export default Boosting;
