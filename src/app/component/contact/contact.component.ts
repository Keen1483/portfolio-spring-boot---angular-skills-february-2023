import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MailService } from '../../service/mail.service';
import { Mail } from '../../model/mail.model';
import { DatePipe } from '@angular/common';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required, Validators.minLength(10)]);

  constructor(private datePipe: DatePipe,
              private mailService: MailService) { }

  ngOnInit(): void {
    // let mail: Mail;
    // for (let i = 0; i < 20; i++) {
    //   mail = {
    //     email: faker.internet.email(),
    //     message: faker.lorem.sentences(Math.random() * 3),
    //     date: this.datePipe.transform(faker.date.past(), 'dd/MM/yyyy HH:mm:ss')
    //   };
    //   this.mailService.addMail(mail);
    // }
  }

  submitForm() {
    const mail: Mail = {
      email: this.email.value,
      message: this.message.value,
      date: this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
    };
    this.mailService.addMail(mail);
  }

}
