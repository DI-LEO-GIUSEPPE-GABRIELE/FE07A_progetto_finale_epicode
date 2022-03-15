import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Utente } from 'src/app/models/utente';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  welcomeUser!: string | undefined;

  constructor(private authSrv: AuthService) {}

  onLogout() {
    this.authSrv.logout();
  }

  ngOnInit(): void {
    this.authSrv.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    this.authSrv.user$.subscribe((data) => {
      this.welcomeUser = data?.user.username;
    })
  }
}
