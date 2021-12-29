import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Header from '../components/common/Header';
import NavBar from '../components/common/Navbar';
import Recommendation from '../components/glam/Recommendation';

const NavBarBlock = styled.div`
  position: fixed;
  bottom: 0;
`;

const ContentsBlock = styled.div`
  margin: 4px;
  height: calc(100vh - 136px);
  overflow-y: scroll;
`;

const Home: NextPage = () => (
  <>
    <Header />
    <ContentsBlock>
      <Recommendation />
    </ContentsBlock>
    <NavBarBlock>
      <NavBar />
    </NavBarBlock>
  </>
);

export default Home;
