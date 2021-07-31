export type User = {
  name: string;
  email: string;
};

export type UserState = {
  user?: User;
  language?: string;
};




export const initialUserState: UserState = {};
