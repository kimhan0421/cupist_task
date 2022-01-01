type RecommendationData = {
  img: string;
  title: string;
  hot: boolean;
};

export default RecommendationData;

export const recommendationData: RecommendationData[] = [
  {
    img: '/images/ic-today.png',
    title: '글램추천',
    hot: true,
  },
  {
    img: '/images/ic-more.png',
    title: '180cm 이상',
    hot: true,
  },
  {
    img: '/images/ic-topLevel.png',
    title: '최상위 매력',
    hot: true,
  },
  {
    img: '/images/ic-pet.png',
    title: '반려 동물을 키우는',
    hot: false,
  },
  {
    img: '/images/ic-fast.png',
    title: '즉흥적인 만남 선호',
    hot: false,
  },
  {
    img: '/images/ic-it.png',
    title: 'IT업계에서 일하는',
    hot: false,
  },
  {
    img: '/images/ic-office.png',
    title: '공무원으로 일하는',
    hot: false,
  },
  {
    img: '/images/ic-alone.png',
    title: '자취하는',
    hot: false,
  },
];
