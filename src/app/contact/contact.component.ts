import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ContactForm: FormGroup;
  submitted = false;

 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  
    this.ContactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    },);

  }

  get f() { return this.ContactForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ContactForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.ContactForm.reset();

  }
  
  

  
}
