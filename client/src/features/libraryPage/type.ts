export type Material = {
  id: number;
  user_id: number;
  comment_id: number;
  type: string;
  name: string;
  author: string;
  content: string;
  url: string;
  file: string;
};
export type MaterialID = Material['id']
export type MaterialContent = Pick<Material, 'id'| 'name'| 'author'| 'content'|'url'>
export type MaterialAdd = Pick<Material, 'name'| 'author'| 'content'|'url'>

export type Theme = {
  id: number;
  name: string;
};
export type ThemeID = Theme['id']

export type Library = {
  id: number;
  material_id: number;
  theme_id: number;
};
