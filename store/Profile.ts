import { action, makeObservable, observable } from 'mobx';

export interface IntroduceProps {
  nickName: string;
  gender: 'male' | 'female';
  birthday: string;
  location: string;
  introduce: string;
  height: string;
  shape: string;
  job: string;
  company: string;
  education: string;
  school: string;
  personality: string[];
  religion: string;
  drinking: string;
  smoking: string;
  bloodType: string;
  race: string;
  charmPoint: string[];
  interest: string[];
  lifestyle: string[];
}

class ProfileStore {
  introduce: IntroduceProps = {
    nickName: '',
    gender: 'male',
    birthday: '',
    location: '',
    introduce: '',
    height: '',
    shape: '',
    job: '',
    company: '',
    education: '',
    school: '',
    personality: [],
    religion: '',
    drinking: '',
    smoking: '',
    bloodType: '',
    race: '',
    charmPoint: [],
    interest: [],
    lifestyle: [],
  };

  constructor() {
    makeObservable(this, {
      introduce: observable,
      getIntroduce: action,
      modifyHeight: action,
      modifyShape: action,
      modifyIntroduce: action,
    });
  }

  getIntroduce = () => {
    if (localStorage.getItem('user')) {
      this.introduce = JSON.parse(localStorage.getItem('user'));
      return this.introduce;
    }
    this.introduce = require('../data.json').data.information;
    localStorage.setItem('user', JSON.stringify(this.introduce));
    return this.introduce;
  };

  heightUpdate = (introduce: IntroduceProps[], inputHeight: string) => ({
    ...introduce,
    height: inputHeight,
  });

  modifyHeight = (height: any) => {
    let inputHeight = height;
    if (height < 120) {
      inputHeight = '120이하';
    } else if (height > 200) {
      inputHeight = '200이상';
    }
    const localUser = JSON.parse(localStorage.getItem('user'));
    const updateIntroduce = this.heightUpdate(localUser, inputHeight);
    this.introduce = updateIntroduce;
    localStorage.setItem('user', JSON.stringify(updateIntroduce));
  };

  shapeUpdate = (introduce: IntroduceProps[], shape: string) => ({
    ...introduce,
    shape,
  });

  modifyShape = (shape: string) => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    const updateIntroduce = this.shapeUpdate(localUser, shape);
    this.introduce = updateIntroduce;
    localStorage.setItem('user', JSON.stringify(updateIntroduce));
  };

  introduceUpdate = (introduce: IntroduceProps[], inputIntroduce: string) => ({
    ...introduce,
    introduce: inputIntroduce,
  });

  modifyIntroduce = (introduce: string) => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    const updateIntroduce = this.introduceUpdate(localUser, introduce);
    this.introduce = updateIntroduce;
    localStorage.setItem('user', JSON.stringify(updateIntroduce));
  };
}

export default ProfileStore;

export const ProfileInstance = new ProfileStore();
