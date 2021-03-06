import styled from '@emotion/styled';
import { ReactElement } from 'react';

import icBoosting from '../../images/ic-boosting.svg';

const Wrapper = styled.div`
  align-items: center;
  background: rgba(33, 33, 33, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: rgba(255, 255, 255);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 164px;
  overflow: hidden;
  width: 273px;
`;

const ModalScroll = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background: rgba(255, 255, 255);
    height: 8px;
    margin-right: 10px;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c3eef5;
    border-radius: 6px;

    :hover {
      background-color: rgba(58, 167, 208);
    }
  }
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255);
  }
`;

const Title = styled.div`
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: -0.05em;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  padding-top: 4px;
  color: ${props => props.theme.colors.charcoalGrey};
  text-align: center;
`;

const RecomButton = styled.button`
  display: flex;
  width: 246px;
  height: 36px;
  background-color: ${props => props.theme.colors.cyanBlue};
  border-radius: 8px;
  margin: 20px 14px 0;
  padding: 8px;
  text-align: center;
  justify-content: center;
`;

const RecomTitle = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
`;

const RecomPrice = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  font-weight: 600;
  color: ${props => props.theme.colors.steelBlue};
  margin-left: 8px;
  margin-top: 4px;
`;

const IconRecom = styled.div`
  background: url(${icBoosting}) 0 center no-repeat;
  padding: 9px;
  width: 9px;
  height: 9px;
  margin-left: 2px;
`;

const Close = styled.div`
  cursor: pointer;
  display: flex;
  width: 246px;
  height: 36px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  margin: 0 14px 8px;
  padding: 9px;
  text-align: center;
  justify-content: center;
`;

interface ResearchModalProps {
  title: string;
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function ResearchModal({ title, close }: ResearchModalProps): ReactElement {
  return (
    <Wrapper>
      <Modal>
        <ModalScroll>
          {title === '????????????' ? <Title>??? ????????? ?????????????</Title> : <Title>{title}</Title>}
          <SubTitle>?????? ????????? 2?????? ???????????????.</SubTitle>
          <RecomButton>
            <RecomTitle>????????????</RecomTitle>
            <RecomPrice>100</RecomPrice>
            <IconRecom />
          </RecomButton>
          <Close onClick={close}>????????????</Close>
        </ModalScroll>
      </Modal>
    </Wrapper>
  );
}

export default ResearchModal;
