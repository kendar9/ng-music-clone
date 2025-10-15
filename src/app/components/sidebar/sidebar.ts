
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Playlist } from '../../models/music.models';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent implements OnInit {
  playlists$!: Observable<Playlist[]>;

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.playlists$ = this.musicService.getPlaylists();
  }
}
