export type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  status?: string;
  userEmail?: string | null;
};
