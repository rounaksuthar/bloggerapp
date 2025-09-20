import { NgIf, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  submitted=false;
  registrationform:FormGroup;
  username_exists=['ABC','XYZ', 'PQR'];
  

  constructor(private fb:FormBuilder){
    this.registrationform = this.fb.group({
      firstname:['',[Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]+$')]],
      lastname:['',[Validators.minLength(3), Validators.pattern('^[A-Za-z]+$')]], 
      username:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z0-9]+$')]],
      phonenumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]+$')]],
      Email:['',[Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]]
  });
     
  }

  get f(){
    return this.registrationform.controls;
  }

  onSubmit() {
    this.submitted=true;
    if(this.registrationform.invalid)
    {
      this.registrationform.markAllAsTouched();
      return;
    }
    console.log(this.registrationform);
  }
}

