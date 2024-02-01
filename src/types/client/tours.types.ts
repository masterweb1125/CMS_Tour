export type Tours = {
  name: string;
  price: number;
  coverPic: string;
  agent?: Agent;
  description: string;
  duration: Duration;
  favorite?: boolean;
  viewers: number;
};

type Agent = {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  profilePic?: string;
  phoneNumber?: number;
  email?: string;
  locationCity?: string;
  locationCountry?: string;
};

type Duration = {
  hours: number;
  minutes: number;
};
