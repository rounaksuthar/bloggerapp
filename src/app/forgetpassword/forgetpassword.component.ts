import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
  submitted=false;
  registrationform:FormGroup
  constructor(){
    this.registrationform=new FormGroup({});

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
