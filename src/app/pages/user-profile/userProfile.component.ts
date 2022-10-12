import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})

export class UserProfileComponent {
  jsonIn = {
    typePerson: '',
    IVA: '',
    RagioneSociale: '',
    name: '',
    lastName: '',
    codiceFiscale: '',
    email: '',
    telephoneNumber: '',
    fax: '',
    birthday: '',
    male: '',
    female: '',
    address: '',
    nCivic: '',
    state: '',
    city: '',
    province: '',

    rememberMe: false,
  }
  @ViewChild('loginForm') loginForm!: NgForm;
  showErrors = false;
  showPassword = false;
  
  constructor(private router: Router) {}

  signIn() {
    if (this.loginForm.form.invalid) {
      this.showErrors = true;
    } else {
      this.router.navigateByUrl('/home');
    }
  }


}
