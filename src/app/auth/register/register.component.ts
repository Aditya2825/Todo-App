import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../forms/forms.validator';
import { AuthUser } from '../../interfaces/auth-user.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  auth_user:AuthUser[]=[];
  registerForm: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private auth_service:AuthService) { 
    // this.formSubmit();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }


  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  registerData(){
    this.auth_service.registerUser({
      name:this.registerForm.value.fullName,
      // userName:this.registerForm.value.userName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
    }).subscribe((auth_user)=>(this.auth_user=auth_user))
    // this.registerForm.reset();
  }

  formSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    console.log(this.registerForm.value)
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
