
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Song } from '../../models/music.models';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.html',
  styleUrls: ['./player.css']
})
export class PlayerComponent implements OnInit {
  currentSong$!: Observable<Song | null>;

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.currentSong$ = this.musicService.getCurrentSong();
  }
}
