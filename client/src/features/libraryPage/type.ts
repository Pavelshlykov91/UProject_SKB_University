export type Materials = {
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

export type Themes = {
  id: number;
  name: string;
};

export type Libreries = {
  id: number;
  material_id: number;
  theme_id: number;
};
