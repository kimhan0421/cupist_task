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
    });
  }

  getIntroduce = () => {
    this.introduce = require('../data.json').data.information;
    return this.introduce;
  };

  modifyHeight = (height: any) => {
    let inputHeight = height;
    if (height < 120) {
      inputHeight = '120이하';
    } else if (height > 200) {
      inputHeight = '200이상';
    }
    this.introduce.height = inputHeight;
    localStorage.setItem('user', JSON.stringify(this.introduce));
  };

  modifyShape = (shape: string) => {
    this.introduce.shape = shape;
    localStorage.setItem('user', JSON.stringify(this.introduce));
  };
}

export default ProfileStore;

export const ProfileInstance = new ProfileStore();
