import { Component, OnInit, HostListener, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validator';
import { Router } from '@angular/router';




@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {
  showhide: boolean = false;
  SinginForm: FormGroup;
  SingupForm: FormGroup;
  submittedlogin = false;
  submittedSignup = false;
  ForgotPasswordForm: FormGroup;

  @Input() name: string;

 
  submitted = false;
  router: string;
  constructor(private formBuilder: FormBuilder, public _router: Router) {


    this._router.events.subscribe(() => this.router = this._router.url);


  }

  ngOnInit() {
    this.SinginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.SingupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });

    this.ForgotPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],

      confirmemail: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
    }, {
        validator: MustMatch('email', 'confirmemail')
      });
  }
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (window.pageYOffset > 150) { this.showhide = true; } else { this.showhide = false; }
  }
  get signin() { return this.SinginForm.controls; }

  get signup() { return this.SingupForm.controls; }

  get f() { return this.ForgotPasswordForm.controls; }



  

  onSubmit() {
    console.log(this.SinginForm.status);
    this.submittedlogin = true;

    // stop here if form is invalid
    if (this.SinginForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submittedlogin = false;
    this.SinginForm.reset();
    //localStorage.setItem('Singup', JSON.stringify(this.SinginForm));

    //this._router.navigate(['/home']);
  }

  onSignupSubmit() {
    this.submittedSignup = true;

    // stop here if form is invalid
    if (this.SingupForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submittedSignup = false;
    this.SingupForm.reset();


    //localStorage.setItem('Singup', JSON.stringify(this.SingupForm.value));


    //this._router.navigate(['/home']);
  }

  onForgotSubmit() {
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
