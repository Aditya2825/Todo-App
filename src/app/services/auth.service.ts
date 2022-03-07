import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser } from '../interfaces/auth-user.interface';
import { AuthUserLogin } from '../interfaces/auth-user-login.interface';
import { Loginresponse } from '../interfaces/loginresponse.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly auth_base_url='https://express-todoapi-opensource.herokuapp.com/auth/register';
  private readonly auth_login_url='https://express-todoapi-opensource.herokuapp.com/auth/login';
  login_isTrue=false;
  
  constructor(private http:HttpClient) { }

  // register data to the url database
  registerUser(data: AuthUser): Observable<AuthUser[]> {
    return this.http.post<AuthUser[]>(this.auth_base_url, data);
  }

  loginUser(login_data:AuthUserLogin):Observable<Loginresponse>{
    return this.http.post<Loginresponse>(this.auth_login_url,login_data);
  }

}
