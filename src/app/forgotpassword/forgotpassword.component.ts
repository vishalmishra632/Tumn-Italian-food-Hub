import { Component, OnInit, HostListener  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {


  ForgotPasswordForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private _router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.ForgotPasswordForm = this.formBuilder.group({
    
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
    
      confirmemail: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
    }, {
        validator: MustMatch('email', 'confirmemail')
      });
  }

  get f() { return this.ForgotPasswordForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ForgotPasswordForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.ForgotPasswordForm.reset();

    //localStorage.setItem('Singup', JSON.stringify(this.SingupForm));

    //this._router.navigate(['/thankyou']);
  }


}
