
export interface Artist {
  id: string;
  name: string;
}

export interface Song {
  id: string;
  title: string;
  artist: Artist;
  album: string;
  duration: number; // in seconds
  coverUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
  coverUrl: string;
}
