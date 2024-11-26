export interface PostType {
  title: string;
  description: string;
  videoLink: string;
  category: string[];
  ingredients: { name: string; quantity: string }[];
}