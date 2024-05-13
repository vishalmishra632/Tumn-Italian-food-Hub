import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {

  CommentForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.CommentForm = this.formBuilder.group({
      Name: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'),]],
      website: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  get f() { return this.CommentForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.CommentForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.CommentForm.reset();

  }
}
