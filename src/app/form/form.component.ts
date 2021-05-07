import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form:FormGroup

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.email],
      postalAddress:['',Validators.required],
      comments:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  submitForm(){
    alert(JSON.stringify(this.form.value))
  }
}
