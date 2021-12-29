import styled from '@emotion/styled';
import type { NextPage } from 'next';

import Header from '../components/common/Header';
import NavBar from '../components/common/Navbar';

const NavBarBlock = styled.div`
  position: fixed;
  bottom: 0;
`;

const Home: NextPage = () => (
  <>
    <Header />
    <NavBarBlock>
      <NavBar />
    </NavBarBlock>
  </>
);

export default Home;
