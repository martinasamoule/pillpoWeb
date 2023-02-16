import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestloginService } from './../../services/testlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  ErrorMessage: string = '';
  ErrorShow: boolean = false;

  constructor(
    private FormBuild: FormBuilder,
    private Route: Router ,
    private loginService : TestloginService
  ) {
    this.LoginForm = FormBuild.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void { }
  get Email() {
    return this.LoginForm.get('email');
  }

  get Password() {
    return this.LoginForm.get('password');
  }

  SubmitForm() {
    this.loginService.Login(this.Email?.value ,this.Password?.value);
    this.Route.navigate(['/Home'])

  }

}
