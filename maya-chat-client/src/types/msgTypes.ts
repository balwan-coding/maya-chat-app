export interface Message {
  userId: number | string;
  msg: string;
}

export interface Users {
  userId: number | string;
  name: string;
  userName: string;
  profilePic: string | null;
  isOnlie: boolean;
}
