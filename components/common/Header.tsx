import styled from '@emotion/styled';

const Slef = styled.div`
  padding-top: 16px;
`;

const TabFlex = styled.div`
  display: flex;
`;

const GlamTab = styled.div`
  margin: 0 8px;
`;

const GlamTabTitle = styled.div`
  background: url('/images/ic-logo.png') center no-repeat;
  background-size: 64px 32px;
  width: 64px;
  height: 32px;
  position: relative;
  :after {
    content: '';
    width: 100%;
    height: 1px;
    display: block;
    position: absolute;
    margin-top: 40px;
    border-bottom: 3px solid ${props => props.theme.colors.black};
  }
`;

const TabTitle = styled.div`
  margin: 8px;
  color: ${props => props.theme.colors.lightGray};
`;

const SlefHr = styled.hr`
  color: ${props => props.theme.colors.lightGray};
`;

function Header() {
  return (
    <>
      <Slef>
        <TabFlex>
          <GlamTab>
            <GlamTabTitle />
          </GlamTab>
          <TabTitle>라이브</TabTitle>
          <TabTitle>근처</TabTitle>
        </TabFlex>
        <SlefHr />
      </Slef>
    </>
  );
}

export default Header;
