/* eslint-disable @typescript-eslint/no-explicit-any */
export type apiType = {
  title: string;
  content: apiContentType[];
};
type apiContentType = {
  type: 'text' | 'subtitle' | 'subsubtitle';
  item: apiContentItemType[];
};
type apiContentItemType = {
  text: string;
  highlight: boolean;
};

export type metaType = {
  docs: docsType[];
  exams: any;
  tests: any;
  teachers: docsType[];
  groups: groupsType[];
  users: string[];
};

type groupsType = {
  course: number;
  group: string;
  teacher: string;
};

export type docsType = {
  course: number | null;
  semestr: number | null;
  subject: string | null;
  teacher: string | null;
  title: string | null;
  fb_id: string;
  year: number;
};

export type bufferType = {
  id: number;
  fullname: string;
  photo: string;
};

export type userType = {
  id: number;
  telegram_nickname: string;
  display_name: string | null;
  description: string | null;
  photo_url: string | null;
  group: string;
};

export type teachersType = {
  course: number;
  group: string;
  lecture: teachersElementType[];
  practice: teachersElementType[];
};

type teachersElementType = {
  name: string;
  subject: string;
};
