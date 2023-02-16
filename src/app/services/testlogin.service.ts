import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestloginService {
  private IsLogin : BehaviorSubject<boolean> ;
  private UserName : BehaviorSubject<string>  ;


  constructor() { 
    
    this.IsLogin = new BehaviorSubject <boolean> (this.IsUserLogged) ;
    this.UserName = new BehaviorSubject <string> ("") ;
  }
  Login(UserName: string, Password: string)
  {
    let UserToken = '7548621' ;
    localStorage.setItem("Token", UserToken) ;
    localStorage.setItem("UserName",UserName);
    this.IsLogin.next(true) ;
    this.UserName.next(UserName) ;
  }

  Logout()
  {
    localStorage.removeItem("Token") ;
    localStorage.removeItem("UserName")
    this.IsLogin.next(false) ;
    this.UserName.next("") ;
  }
  
  get IsUserLogged(): boolean
  {
    return (localStorage.getItem('Token'))? true: false ;
  }
}
