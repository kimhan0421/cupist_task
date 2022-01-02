import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Header from '../components/common/Header';
import NavBar from '../components/common/Navbar';
import Boosting from '../components/glam/Boosting';
import Recommendation from '../components/glam/Recommendation';
import { recommendationData } from '../components/glam/data/RecommendationData';

const NavBarBlock = styled.div`
  position: fixed;
  bottom: 0;
`;

const ContentsBlock = styled.div`
  margin: 4px;
  height: calc(100vh - 136px);
  overflow-y: scroll;
  overflow-x: hidden;
`;

const PositionDiv = styled.div`
  padding-top: 8px;
`;

const Home: NextPage = () => (
  <>
    <Header />
    <ContentsBlock>
      <Boosting />
      <PositionDiv />
      <Recommendation recommendationData={recommendationData} />
    </ContentsBlock>
    <NavBarBlock>
      <NavBar />
    </NavBarBlock>
  </>
);

export default Home;
