import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  welcomeUser: any;

  constructor(private authSrv: AuthService) {}

  onLogout() {
    this.authSrv.logout();
  }

  async ngOnInit() {
    this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
      setTimeout(() => {
        this.welcomeUser = JSON.parse(localStorage.getItem('user')!);
      }, 200);
      this.isLoggedIn = isLoggedIn;
    });
  }
}
