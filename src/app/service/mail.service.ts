import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from '../model/mail.model';
import { Subject } from 'rxjs';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mails: Mail[] = [];
  mailSubject$ = new Subject<Mail[]>();

  apiBaseUrl = 'https://myapp-29fa0-default-rtdb.firebaseio.com';

  constructor(private httpClient: HttpClient,
              private mainService: MainService) { }

  emitMailSubject() {
    this.mailSubject$.next(this.mails.slice());
  }

  addMail(mail: Mail) {
    this.mails.push(mail);
    this.emitMailSubject();
    this.saveMails();
  }

  getMails() {
    return this.httpClient.get<Mail[]>(this.apiBaseUrl + '/mails.json').subscribe(
      (mails: Mail[]) => {
        this.mails = mails;
        this.emitMailSubject();
      },
      error => console.log('An error occured: ' + error)
    );
  }

  saveMails() {
    return this.httpClient.put<any>(this.apiBaseUrl + '/mails.json', this.mails).subscribe(
      response => {
        console.log('Mail save successfully');
        this.mainService.openSnackBar('Mail saved successfully', 'Close');
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }
}
