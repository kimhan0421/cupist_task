import { action, makeObservable, observable } from 'mobx';

export interface ProfileListProps {
  profile: string;
  age: string;
  nickName: string;
  introduce: string;
  job: string;
  height: string;
  personality: string[];
  smoking: string;
  today: boolean;
}

class RecomProfilesStore {
  todayProfileList: ProfileListProps[] = [];

  profileList = [];

  constructor() {
    makeObservable(this, {
      todayProfileList: observable,
      profileList: observable,
      getTodayProfileList: action,
      getProfileList: action,
    });
  }

  getTodayProfileList = () => {
    this.todayProfileList = require('../data.json').data.todayProfiles;
    return this.todayProfileList;
  };

  getProfileList = () => {
    this.profileList = require('../data.json').data.profiles;
    return this.profileList;
  };
}

export default RecomProfilesStore;

export const RecomProfilesInstance = new RecomProfilesStore();
