import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatMenuContent } from "@angular/material/menu";

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {

  username_email_exists=['ABC','XYZ@GMAIL.COM', 'PQR'];
  otppassword:Number=1234;
  submitted=false;
  passwordsubmit=false;
  resetform:FormGroup;
  resetpassword:FormGroup;
  isenablereset:boolean=false;
  isValidEmail:boolean = true;
  ispasswordmatch:boolean=false;
  validateotp:boolean=true;
  passwordreadonly:boolean=true;

  constructor(private fb:FormBuilder){
    this.resetform = this.fb.group({
      Email:['',[Validators.required,Validators.pattern('^[A-za-z0-9._%+-@]+$')]]
    }),
    this.resetpassword = this.fb.group({
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      repassword:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      otp:['',Validators.required,Validators.minLength(6),Validators.maxLength(6)]
    })
  }
  get f(){
    return this.resetform.controls;
  }

  get f1(){
    return this.resetpassword.controls;
  }
  onSubmit() {
    this.submitted=true;
    if(this.resetform.invalid || !this.isValidEmail)
    {
      this.isenablereset=false;
      this.resetform.markAllAsTouched();
      return;
    }
    else
      if(this.resetform.valid){
       this.isenablereset=true;
    }
    console.log(this.resetform);
  }

  onSubmitted() {
    this.passwordsubmit=true;
    if(this.resetpassword.invalid || this.ispasswordmatch)
    {
      this.resetpassword.markAllAsTouched();
      return;
    }
    console.log(this.resetpassword);
  }

  validateEmail() {
    const email:string = String(this.resetform.value.Email);
    console.log(email);
    this.isValidEmail = this.username_email_exists.indexOf(email.toUpperCase()) > -1;
  }

  ValidatePasswordMatch(){
    const pass1:string = String(this.resetpassword.value.repassword);
    const pass2:string = String(this.resetpassword.value.password);
    this.ispasswordmatch = pass1===pass2;
    console.log(pass1+""+ pass2+ " "+this.ispasswordmatch);
  }

  ValidateOTP(){

    const otp1:number = Number(this.resetpassword.value.otp);
    console.log(otp1);
    if( otp1 == this.otppassword)
    {
      this.passwordreadonly=false;
    }
    else{
      this.passwordreadonly=true;
    }
  
  }
}
