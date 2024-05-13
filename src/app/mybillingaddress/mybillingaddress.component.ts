import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mybillingaddress',
  templateUrl: './mybillingaddress.component.html',
  styleUrls: ['./mybillingaddress.component.css']
})
export class MybillingaddressComponent implements OnInit {

  BillingForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.BillingForm = this.formBuilder.group({
      youraddress: ['', Validators.required],
      company: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      addressprecisions: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
  get f() { return this.BillingForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.BillingForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.BillingForm.reset();


    //localStorage.setItem('Singup', JSON.stringify(this.SingupForm.value));


    //this._router.navigate(['/home']);
  }


}
