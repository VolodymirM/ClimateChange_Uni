import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './site-header/site-header';
import { VideoComponent } from './video-component/video-component';
import { PodcastComponent } from './podcast-component/podcast-component';
import { LinktreeComponent } from './linktree-component/linktree-component';
import { TakeActionComponent } from './take-action-component/take-action-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, VideoComponent, PodcastComponent,
    LinktreeComponent, TakeActionComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('climate-change-uni');
}
