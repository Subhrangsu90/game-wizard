export interface Model {
}


export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  players?: number;
  rating?: number;
  featured?: boolean;
  aspectRatio?:string;
}