import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';  
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {


  SingupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private _router: Router, private http: HttpClient) {
    
  }

  ngOnInit() {
    this.SingupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });


  }

  get f() { return this.SingupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.SingupForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.SingupForm.reset();


    //localStorage.setItem('Singup', JSON.stringify(this.SingupForm.value));


    //this._router.navigate(['/home']);
  }



}
