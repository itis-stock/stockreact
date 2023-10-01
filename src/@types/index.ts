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

export type documentType = {
  url: string;
  year: number;
  author_id: number;
  course: number | null;
  semestr: number | null;
  teacher: string | null;
  subject: string | null;
  date: number;
  title: string | null;
  likes: number;
  special: boolean;
};

export type postType = {
  year: number;
  author_id: number;
  course: number;
  semestr: number;
  teacher: string;
  subject: string;
  date: number;
  text: string;
  likes: number;
  attachments: attachmentsType[];
  special: boolean;
};

export type attachmentsType = {
  type: 'photo' | 'doc';
  photo?: photoType[];
  doc?: docType;
};

type photoType = {
  height: number;
  width: number;
  url: string;
};

type docType = {
  title: string;
  size: number;
  ext: string;
  url: string;
};
