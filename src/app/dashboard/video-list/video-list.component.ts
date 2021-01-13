import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { videoData } from '../data';
import { Video } from '../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  videos = videoData;
  selectedVideo: Video | null = null;

  videoClicked(video: Video) {
    this.selectedVideo = video;
  }
}
