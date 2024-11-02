export interface ImageUrls {
  small: string;
  regular: string;
}

export interface Image {
  id: string;
  urls: ImageUrls;
  alt_description: string;
  likes: number;
  user: User;
}
export interface User {
  name: string;
}
