import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { EmailPattern } from "../../constants";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: false
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  signUp() {
    if (this.form.valid) {
      alert("Sign Up");
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
