import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { EmailPattern } from "../../constants";
import { AuthService } from "../../services";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: false
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  async signUp() {
    if (this.form.valid) {
      const { name, email, password } = this.form.getRawValue();

      try {
        const result = await this.authService.signUp({ name, email, password });

        if (result) {
          alert('User has been registered. Use Sign In to continue.');
          this.router.navigate(['/auth']);
        }
      } catch (err) {
        alert(err);
      }
    }
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: ['', [Validators.required, Validators.pattern(EmailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
}
