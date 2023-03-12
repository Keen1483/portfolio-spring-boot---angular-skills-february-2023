import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Mail } from '../../model/mail.model';
import { MailService } from '../../service/mail.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit, OnDestroy {

  mailSubscription$: Subscription;

  displayedColumns: string[] = ['position', 'email', 'message', 'date'];
  dataSource: MatTableDataSource<Mail>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mailService: MailService,
              public authService: AuthService) { }
  
  ngOnInit(): void {
    this.mailService.getMails();
    this.mailSubscription$ = this.mailService.mailSubject$.subscribe(
      (mails: Mail[]) => {
        this.dataSource = new MatTableDataSource(mails);
        
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.log('An error occured: ' + error)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.mailSubscription$.unsubscribe();
  }

}
