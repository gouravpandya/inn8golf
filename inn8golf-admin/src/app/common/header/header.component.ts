import { Component, OnInit } from '@angular/core';
import { Site } from '../model/site.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  siteList: Site[] = [];
  site: Site;
  siteId: number = 0;
  constructor() {
    this.site = new Site();

  }

  ngOnInit() {
    this.getSites();
    this.siteId = parseInt(localStorage.getItem('siteId'));

  }

  setSite() {
    localStorage.setItem('siteId', JSON.parse(JSON.stringify(this.siteId)));
    window.location.reload();
  }

  private getSites() {
    this.siteList = [{ id: 123456, name: '123456' }, { id: 123, name: '123' }, { id: 12, name: '12' }]
  }
}
