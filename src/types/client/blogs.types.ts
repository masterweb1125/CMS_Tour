export type Blogs = {
  name: string;
  coverPic: string;
  agent?: Agent;
  description: string;
  blogHeading: string;
};

type Agent = {
  firstName: string;
  lastName: string;
  profilePic: string;
  date: Date;
};

type Date = {
  day: number;
  month: string;
  year: number;
};
