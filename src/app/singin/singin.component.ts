import { Component, OnInit, HostListener  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  

  SinginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private _router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.SinginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get f() { return this.SinginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.SinginForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.SinginForm.reset();
    //localStorage.setItem('vishal', JSON.stringify(this.SinginForm.value));

    //this._router.navigate(['/home']);
  }


}
