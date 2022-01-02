import styled from '@emotion/styled';

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
  max-height: 600px;
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

interface ModalLayoutPROPS {
  children: React.ReactNode;
}

function ModalLayout({ children }: ModalLayoutPROPS) {
  return (
    <Wrapper>
      <Modal>
        <ModalScroll>{children}</ModalScroll>
      </Modal>
    </Wrapper>
  );
}
export default ModalLayout;
