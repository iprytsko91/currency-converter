import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { EmailPattern } from "../../constants";
import { AuthService } from "../../services";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: false
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  async signIn() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      try {
        const user = await this.authService.signIn({ email, password });

        if (user) {
          this.router.navigate(['/']);
        }

      } catch (err) {
        alert(err)
      }
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EmailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}
