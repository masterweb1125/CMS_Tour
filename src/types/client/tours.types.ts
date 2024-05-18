export type Tours = {
  id: number;
  name: string;
  price: number;
  category?: string;
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
