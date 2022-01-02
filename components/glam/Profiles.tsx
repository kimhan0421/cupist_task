import styled from '@emotion/styled';
import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';

import icDelete from '../../images/ic-delete.svg';
import icInfo from '../../images/ic-info.svg';
import icStar from '../../images/ic-star.svg';
import RecomProfilesStoreProps, { ProfileListProps } from '../../store/RecomProfiles';

const Block = styled.div`
  position: relative;
`;
const ProfileImg = styled.img`
  width: 360px;
  height: auto;
  min-height: 360px;
  margin: 4px;
  border-radius: 8px;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
`;

const Wapper = styled.div`
  padding: 5px 10px;
  background-color: ${props => props.theme.colors.dimGray};
  text-align: center;
  position: absolute;
  bottom: 0%;
  mask-image: linear-gradient(transparent, #fff 41px);
  will-change: bottom;
  margin: 5px;
  width: 359px;
  border-radius: 0 0 8px 8px;
`;

const NameBlock = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 34px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
`;

const IconMore = styled.div`
  cursor: pointer;
  background: url(${icInfo}) 0 center no-repeat;
  margin: 8px 6px;
  width: 18px;
  height: 18px;
`;

const IntroduceSelf = styled.div`
  padding-top: 8px;
  text-align: initial;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
`;

const BottomWapper = styled.div`
  display: flex;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const BottomCancel = styled.div`
  cursor: pointer;
  background: ${props => props.theme.colors.charcoalGrey};
  border-radius: 8px;
  width: 46px;
`;

const IconDelete = styled.div`
  background: url(${icDelete}) 0 center no-repeat;
  margin: 8px 6px;
  width: 18px;
  height: 18px;
  margin-left: 15px;
`;

const Like = styled.div`
  cursor: pointer;
  margin: 0 5px;
  text-align: center;
  background: ${props => props.theme.colors.cyanBlue};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  width: 250px;
  padding: 10px;
`;

const BottomStar = styled.div`
  cursor: pointer;
  background: ${props => props.theme.colors.cyanBlue};
  border-radius: 8px;
  width: 46px;
`;

const IconStar = styled.div`
  background: url(${icStar}) 0 center no-repeat;
  margin: 8px 6px;
  width: 18px;
  height: 18px;
  margin-left: 15px;
  margin-top: 11px;
`;

interface ProfileProps {
  RecomProfilesStore: RecomProfilesStoreProps;
}

function Profile({ RecomProfilesStore }: ProfileProps) {
  const [profileList, setProfileList] = useState<ProfileListProps[]>([]);
  useEffect(() => {
    RecomProfilesStore.getProfileList();
    setProfileList(RecomProfilesStore.profileList);
  }, [RecomProfilesStore]);

  return (
    <>
      {profileList.map(item => (
        <Block>
          <ProfileImg src={item.profile} />
          <Wapper>
            <NameBlock>
              {item.nickName}, {item.age}
              <IconMore />
            </NameBlock>
            <IntroduceSelf>{item.introduce}</IntroduceSelf>
            <BottomWapper>
              <BottomCancel>
                <IconDelete />
              </BottomCancel>
              <Like>좋아요</Like>
              <BottomStar>
                <IconStar />
              </BottomStar>
            </BottomWapper>
          </Wapper>
        </Block>
      ))}
    </>
  );
}

export default inject('RecomProfilesStore')(observer(Profile));
