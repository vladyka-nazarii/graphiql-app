export interface IUser {
  id: string;
  email: string;
  token: string;
}

export interface IMember {
  id: number;
  name: string;
  avatarSrc: string;
  isTeamLeader: boolean;
  githubSrc: string;
  translationKey: string;
}
