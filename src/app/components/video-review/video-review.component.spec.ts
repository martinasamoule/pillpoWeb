import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoReviewComponent } from './video-review.component';

describe('VideoReviewComponent', () => {
  let component: VideoReviewComponent;
  let fixture: ComponentFixture<VideoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
