/**
 * FILTER CRITERIA
 */
export enum MatchingFilterCriteriaID {
  All = 'all',
  Individual = 'individual',
  Team = 'team',
}

export const MATCHING_FILTER_CRITERIA: {
  id: MatchingFilterCriteriaID;
  name: string;
}[] = [
  {
    id: MatchingFilterCriteriaID.All,
    name: 'Tất cả',
  },
  {
    id: MatchingFilterCriteriaID.Individual,
    name: 'Cá nhân',
  },
  {
    id: MatchingFilterCriteriaID.Team,
    name: 'Đội ngũ',
  },
];

/**
 * SORT CRITERIA
 */
export enum MatchingSortCriteriaID {
  Default = 'MATCHING_SORT@4',
  LowestPrice = 'MATCHING_SORT@6',
  BestRating = 'MATCHING_SORT@7',
  MostEmployees = 'MATCHING_SORT@8',
  Nearest = 'MATCHING_SORT@9',
}

export const MATCHING_SORT_CRITERIA: {
  id: MatchingSortCriteriaID;
  name: string;
}[] = [
  {
    id: MatchingSortCriteriaID.Default,
    name: 'Mặc định',
  },
  {
    id: MatchingSortCriteriaID.LowestPrice,
    name: 'Giá thấp nhất',
  },
  {
    id: MatchingSortCriteriaID.BestRating,
    name: 'Đánh giá tốt nhất',
  },
  {
    id: MatchingSortCriteriaID.MostEmployees,
    name: 'Nhiều nhân viên nhất',
  },
  {
    id: MatchingSortCriteriaID.Nearest,
    name: 'Gần nhất',
  },
];
