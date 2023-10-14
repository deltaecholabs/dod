import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base-component';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {
    super();
  }

  init(): void {
  }

  destroy(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  }

  get controls(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

}
