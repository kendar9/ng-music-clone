
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Playlist, Song } from '../../models/music.models';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-playlist-view',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './playlist-view.html',
  styleUrls: ['./playlist-view.css']
})
export class PlaylistViewComponent implements OnInit {
  playlist$!: Observable<Playlist | undefined>;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService
  ) {}

  ngOnInit(): void {
    this.playlist$ = this.route.paramMap.pipe(
      map(params => params.get('id')!),
      switchMap(id => this.musicService.getPlaylistById(id))
    );
  }

  playSong(song: Song): void {
    this.musicService.playSong(song);
  }

  // Helper para formatear la duración de las canciones
  formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
