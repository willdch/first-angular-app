import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of } from 'rxjs';
import { Music } from '../../../shared/models/music';
import { DomSanitizer } from '../../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {
  private musicRoute = 'http://localhost:3000/music';
  public music: Music[];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getMusic() {
    this.http.get<Music[]>(this.musicRoute).subscribe(music => {
      this.music = music;
      console.log('Music', this.music);
    });
  }

  ngOnInit() {
    this.getMusic();
  }

  getUrl(music) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + music.url
    );
  }
}
