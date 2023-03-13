import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectChange } from '@angular/material/select';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bernard-geraud';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang() ?? 'en');

    const firebaseConfig = {
      apiKey: "AIzaSyAwmvzgxebTwJbDUrxAtiC0446xwzjaOng",
      authDomain: "myapp-29fa0.firebaseapp.com",
      databaseURL: "https://myapp-29fa0-default-rtdb.firebaseio.com",
      projectId: "myapp-29fa0",
      storageBucket: "myapp-29fa0.appspot.com",
      messagingSenderId: "718132531498",
      appId: "1:718132531498:web:bd3b80bc90b0ac7e1bce53"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }

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

  changeLang(event: MatSelectChange) {
    this.translate.use(event.value);
    this.ngOnInit();
  }
}
