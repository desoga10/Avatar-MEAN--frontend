export interface GetAvatar {
  _id: string;
  name: string;
  avatar: string;
  cloudinary_id: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAvatar {
  name: string;
  avatar: string;
  cloudinary_id: string;
}
