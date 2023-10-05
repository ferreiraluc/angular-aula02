import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })

export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        senha: new FormControl('', Validators.required)
    });

    onSubmit() {
        if (this.loginForm.valid) {
            const email = this.loginForm.value.email;
            const senha = this.loginForm.value.senha;
        }
    }
}