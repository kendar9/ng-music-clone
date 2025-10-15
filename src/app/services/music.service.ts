
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Artist, Playlist, Song } from '../models/music.models';

// --- MOCK DATA ---
const MOCK_ARTISTS: Record<string, Artist> = {
  queen: { id: 'art-1', name: 'Queen' },
  daft_punk: { id: 'art-2', name: 'Daft Punk' },
  the_beatles: { id: 'art-3', name: 'The Beatles' },
};

const MOCK_SONGS: Song[] = [
  { id: 's-1', title: 'Bohemian Rhapsody', artist: MOCK_ARTISTS['queen'], album: 'A Night at the Opera', duration: 355, coverUrl: 'https://picsum.photos/seed/s-1/300' },
  { id: 's-2', title: "Don't Stop Me Now", artist: MOCK_ARTISTS['queen'], album: 'Jazz', duration: 209, coverUrl: 'https://picsum.photos/seed/s-2/300' },
  { id: 's-3', title: 'Around the World', artist: MOCK_ARTISTS['daft_punk'], album: 'Homework', duration: 449, coverUrl: 'https://picsum.photos/seed/s-3/300' },
  { id: 's-4', title: 'Harder, Better, Faster, Stronger', artist: MOCK_ARTISTS['daft_punk'], album: 'Discovery', duration: 224, coverUrl: 'https://picsum.photos/seed/s-4/300' },
  { id: 's-5', title: 'Hey Jude', artist: MOCK_ARTISTS['the_beatles'], album: 'The Beatles (White Album)', duration: 431, coverUrl: 'https://picsum.photos/seed/s-5/300' },
  { id: 's-6', title: 'Come Together', artist: MOCK_ARTISTS['the_beatles'], album: 'Abbey Road', duration: 259, coverUrl: 'https://picsum.photos/seed/s-6/300' },
];

const MOCK_PLAYLISTS: Playlist[] = [
  {
    id: 'pl-1',
    name: 'Rock Clásico',
    songs: [MOCK_SONGS[0], MOCK_SONGS[1], MOCK_SONGS[4], MOCK_SONGS[5]],
    coverUrl: 'https://picsum.photos/seed/pl-1/300'
  },
  {
    id: 'pl-2',
    name: 'Electronic Hits',
    songs: [MOCK_SONGS[2], MOCK_SONGS[3]],
    coverUrl: 'https://picsum.photos/seed/pl-2/300'
  }
];
// --- END MOCK DATA ---

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private currentSong$ = new BehaviorSubject<Song | null>(null);

  getPlaylists(): Observable<Playlist[]> {
    return of(MOCK_PLAYLISTS);
  }

  getPlaylistById(id: string): Observable<Playlist | undefined> {
    return of(MOCK_PLAYLISTS.find(p => p.id === id));
  }

  getCurrentSong(): Observable<Song | null> {
    return this.currentSong$.asObservable();
  }

  playSong(song: Song): void {
    this.currentSong$.next(song);
  }
}
