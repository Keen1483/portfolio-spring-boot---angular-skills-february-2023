import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() navToggle: EventEmitter<boolean> = new EventEmitter();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  navOpen() {
    this.navToggle.emit(true);
  }

}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(public authService: AuthService) { }
}
