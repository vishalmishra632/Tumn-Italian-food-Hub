import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-mypersonalinformation',
  templateUrl: './mypersonalinformation.component.html',
  styleUrls: ['./mypersonalinformation.component.css']
})
export class MypersonalinformationComponent implements OnInit {


  PersonalForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.PersonalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
      currentpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmation: ['', Validators.required],
    });

  }
  get f() { return this.PersonalForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.PersonalForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.PersonalForm.reset();


    //localStorage.setItem('Singup', JSON.stringify(this.SingupForm.value));


    //this._router.navigate(['/home']);
  }


  }

