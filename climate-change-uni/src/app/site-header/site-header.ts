import { Component } from '@angular/core';
import { SiteLogo } from './site-logo/site-logo';
import { NavMenu } from './nav-menu/nav-menu';

@Component({
  imports: [SiteLogo, NavMenu],
  selector: 'app-site-header',
  styleUrls: ['./site-header.scss'],
  templateUrl: './site-header.html',
})
export class SiteHeader {}
