import { IMember } from '../types/types';

export const TEAM_MEMBERS_INFO: IMember[] = [
  {
    id: 1,
    name: 'Nazarii Vladyka',
    avatarSrc: './members/Nazarii.jpg',
    isTeamLeader: true,
    githubSrc: 'https://github.com/vladyka-nazarii',
    translationKey: 'teamMemberInfo.VladykaNazarii',
  },
  {
    id: 2,
    name: 'Yevhenii Burkovskyi',
    avatarSrc: './members/Yevhenii.jpg',
    isTeamLeader: false,
    githubSrc: 'https://github.com/EugeneBurkovskiy',
    translationKey: 'teamMemberInfo.YevheniiBurkovskyi',
  },
  {
    id: 3,
    name: 'Maksym Kuzmych',
    avatarSrc: './members/Maksym.jpg',
    isTeamLeader: false,
    githubSrc: 'https://github.com/MaksymKuzmych',
    translationKey: 'teamMemberInfo.MaksymKuzmych',
  },
];
