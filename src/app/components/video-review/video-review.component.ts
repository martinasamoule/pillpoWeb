import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-review',
  templateUrl: './video-review.component.html',
  styleUrls: ['./video-review.component.scss']
})
export class VideoReviewComponent implements OnInit {
  isActive:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
