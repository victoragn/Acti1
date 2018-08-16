import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    posts=[
      {
          title: "Post 1",
          content: "Mon premier post dans ce blog ...",
          loveIts: 3,
          created_at: new Date(2018, 5, 24, 10, 33, 30, 0)
      },{
          title: "Post 2",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          loveIts: -4,
          created_at: new Date(2018, 7, 21, 12, 47, 32, 0)
      },{
          title: "Post 3",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
          loveIts: 0,
          created_at: new Date()
      }
  ];
}
