import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthUserLogin } from '../../interfaces/auth-user-login.interface';
import { Loginresponse } from '../../interfaces/loginresponse.interface';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  auth_user_login:Loginresponse;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private auth_service:AuthService,private router: Router,private route: ActivatedRoute, private authguard:AuthGuard) { }

  ngOnInit() {
    // Initializing Login Form
    this.loginForm = this.formBuilder.group({
      emailid:['',Validators.required],
      password:['',Validators.required],
    })
}
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  // Login form submit and checking if invalid or not
  loginSubmit(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value)
  }


  // Submitting Login Data in Web API
  loginData(){
    this.auth_service.loginUser({
      email:this.loginForm.value.emailid,
      password:this.loginForm.value.password,
    }).subscribe((auth_user_login)=>{(this.auth_user_login=auth_user_login),

      console.log(auth_user_login);

      if(this.auth_user_login.success){
        sessionStorage.setItem('user',JSON.stringify(auth_user_login))
        this.router.navigate(['/todo/todoData']);
      }
    });  
  }

  // Clicking on reset button and resetting the login form
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
