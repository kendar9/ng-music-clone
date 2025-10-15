import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main-view.html',
  styleUrls: ['./main-view.css']
})
export class MainViewComponent {}