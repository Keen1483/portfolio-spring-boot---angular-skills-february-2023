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
    $(document).ready(() => {
      let headerHeight = $('app-header').css('height');
      let footerHeight = $('app-footer').css('height');
      let bodyHeight = $('body').css('height');

      headerHeight = parseInt(headerHeight);
      footerHeight = parseInt(footerHeight);
      bodyHeight = parseInt(bodyHeight);
      let containerHeight = bodyHeight - (headerHeight + footerHeight);

      $('.container').css('min-height', containerHeight+'px');
    });
  }
}
