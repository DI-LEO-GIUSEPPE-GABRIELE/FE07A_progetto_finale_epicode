import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoading = false;
  errorMessage = undefined;

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: any) {
    try {
      await this.authSrv.login(form.value).toPromise();
      form.reset();
      this.errorMessage = undefined;
      this.router.navigate(['/home']);
    } catch (error: any) {
      this.errorMessage = error;
      console.error(error);
    }
  }

  typepsw = 'password'

  showpsw() {
    if (this.typepsw == 'password') {
      this.typepsw = 'text'
    } else {
      this.typepsw = 'password'
    }
  }
}
