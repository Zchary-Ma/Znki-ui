export interface IUser {
  _id: string;
  email: string;
  phone?: string;
  emailVerified: boolean;
  unionid?: string;
  openid?: string;
  oauth?: string;
  registerMethod: string;
  username: string;
  nickname?: string;
  company?: string;
  photo: string;
  browser: string;
  signedUp: string;
  lastLogin?: string;
  token?: string;
  group?: string;
  blocked: boolean;
  device?: string;
  metadata?: string;
  registerInClient: string;
}
