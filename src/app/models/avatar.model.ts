export interface GetAvatar {
  _id: string;
  name: string;
  avatar: string;
  cloudinary_id: string;
  createdAt: any;
  updatedAt: any;
}

export interface CreateAvatar {
  name: string;
  avatar: string;
  cloudinary_id?: string;
}