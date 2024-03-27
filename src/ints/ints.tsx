export interface TagInt {
  id: number;
  title: string;
}

export interface ArtistInt {
  id: number;
  name: string;
  profile_photo: string;
  bio: string;
}

export interface SocialMediaInt {
  id: number;
  artist: ArtistInt;
  platform: string;
  link: string;
}

export interface TrackInt {
  id: number;
  title: string;
  artists: ArtistInt[];
  description: string;
  file: string;
  track_photo: string;
  tags: TagInt[];
  featured: boolean;
  upload_date: string;
}
