import styled from '@emotion/styled';

import icSetting from '../../images/ic-setting.svg';

const Slef = styled.div`
  padding-top: 16px;
`;

const Block = styled.div`
  display: flex;
  width: 100vw;
  max-width: 375px;
  justify-content: space-between;
`;

const IconSetting = styled.div`
  background: url(${icSetting}) 0 center no-repeat;
  padding: 16px;
  width: 22px;
  height: 17px;
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
    <Slef>
      <Block>
        <TabFlex>
          <GlamTab>
            <GlamTabTitle />
          </GlamTab>
          <TabTitle>라이브</TabTitle>
          <TabTitle>근처</TabTitle>
        </TabFlex>
        <IconSetting />
      </Block>
      <SlefHr />
    </Slef>
  );
}

export default Header;
