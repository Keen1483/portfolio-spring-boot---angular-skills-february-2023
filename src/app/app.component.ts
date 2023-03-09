import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bernard-geraud';

  ngOnInit(): void {
    // $(document).ready(() => {
    //   const headerHeight = $('app-header').css('height');
    //   console.log(headerHeight);
    // });
  }
}
