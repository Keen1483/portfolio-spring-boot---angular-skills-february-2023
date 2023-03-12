import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service';
import { MailService } from '../../service/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

}
