import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  isLoading = false;
  errorMessage = undefined;
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onsubmit(form: NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
      await this.authSrv.signup(form.value);
      form.reset();
      this.isLoading = false;
      this.errorMessage = undefined;
      alert('Nuovo User registrato correttamente!');
      this.router.navigate(['']);
    } catch (error: any) {
      this.isLoading = false;
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
