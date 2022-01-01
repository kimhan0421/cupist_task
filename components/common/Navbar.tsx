import styled from '@emotion/styled';

import icBubble from '../../images/ic-bubble.svg';
import icHeart from '../../images/ic-heart.svg';
import icHome from '../../images/ic-home.svg';
import icPerson from '../../images/ic-person.svg';
import icYoutube from '../../images/ic-youtube.svg';

const Self = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  width: 100vw;
  max-width: 375px;
  justify-content: space-between;
`;

const IconHome = styled.div`
  background: url(${icHome}) 0 center no-repeat;
  padding: 24px;
  margin-left: 24px;
  width: 22px;
  height: 22px;
`;

const IconYoutube = styled.div`
  background: url(${icYoutube}) 0 center no-repeat;
  padding: 24px;
  width: 22px;
  height: 22px;
`;

const IconHeart = styled.div`
  background: url(${icHeart}) 0 center no-repeat;
  padding: 24px;
  width: 22px;
  height: 22px;
`;

const IconBubble = styled.div`
  background: url(${icBubble}) 0 center no-repeat;
  padding: 24px;
  width: 22px;
  height: 22px;
`;

const IconPerson = styled.div`
  background: url(${icPerson}) 0 center no-repeat;
  padding: 24px;
  width: 22px;
  height: 22px;
`;

function NavBar() {
  return (
    <Self>
      <IconHome />
      <IconYoutube />
      <IconHeart />
      <IconBubble />
      <IconPerson />
    </Self>
  );
}
export default NavBar;
