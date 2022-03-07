import { Component } from '@angular/core';
import { Loginresponse } from './interfaces/loginresponse.interface';
// import { AuthGuard } from './guards/auth.guard';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'project';
  auth_user_login:Loginresponse;

  constructor(private router: Router,private route: ActivatedRoute,/* private authguard:AuthGuard*/) { }

  logout(){
    this.auth_user_login.success=false;
    sessionStorage.clear();
    if(!this.auth_user_login.success){
      this.router.navigate(['/auth/login'])
    }
   }


}
