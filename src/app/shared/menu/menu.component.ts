import { Component, OnInit } from '@angular/core';

interface Menu {
  route: String;
  name: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu: Menu[] = [
    {
      route: '/maps/fullscreen',
      name: 'FullScreen',
    },
    {
      route: '/maps/markers',
      name: 'Markers',
    },
    {
      route: '/maps/zoom-range',
      name: 'Zoom-Range',
    },
    {
      route: '/maps/props',
      name: 'Props',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
