import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customerprivatearea',
  templateUrl: './customerprivatearea.component.html',
  styleUrls: ['./customerprivatearea.component.css']
})
export class CustomerprivateareaComponent implements OnInit {

  hideSelected: boolean;
  showSelected: boolean;


  hideOutbox: boolean;
  showOutboxs: boolean;


  SendForm: FormGroup;
  submitted: boolean = false;
 


  constructor(private formBuilder: FormBuilder) {
    this.showSelected = false;
    this.hideSelected = true;

    this.showOutboxs = false;
    this.hideOutbox = true;
  }


  toggle() {
    this.showSelected = !this.showSelected;
    this.hideSelected = !this.showSelected;
 
  }

  togglebutton() {

    this.showOutboxs = !this.showOutboxs;
    this.hideOutbox = !this.hideOutbox;
  }




  ngOnInit() {
   
    this.SendForm = this.formBuilder.group({
      type: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]    
    });

  }


  get f() { return this.SendForm.controls; }

  
 
  onSubmit() {
   
    this.submitted = true;

    // stop here if form is invalid
    if (this.SendForm.invalid) {
      return;
    }

    alert('SUCCESS')
    this.submitted = false;
    this.SendForm.reset();
    
  }


  reset() {

    this.submitted = false;
  }

 
 

}
