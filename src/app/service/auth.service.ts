import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged = false;

  constructor(private dialog: MatDialog,
              private router: Router) { }

  authentication(email: string, password: string) {
    if (email === 'keenndjc@gmail.com' && password === '76543210') {
      this.logged = true;
      this.router.navigate(['mails']);
      this.dialog.closeAll();
    } else {
      this.logged = false;
    }
  }

  isLogged() {
    return this.logged;
  }

  logout () {
    this.router.navigate(['home']);
    this.logged = false;
  }
}
