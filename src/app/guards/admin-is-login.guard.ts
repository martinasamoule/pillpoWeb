import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TestloginService } from './../services/testlogin.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminIsLoginGuard implements CanActivate {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor( private testloginService :TestloginService , private route :Router , private loginSnackBar: MatSnackBar){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.testloginService.IsUserLogged)
      {
        return true ;
      }
      else
      {
        this.openSnackBar();
        this.route.navigate(['']);
        return false ;
      }
  }
  openSnackBar() {
    this.loginSnackBar.open("Please login first ..." ,"" ,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5* 1000,
      panelClass:["mt-5","fs-6","fw-bold"]
    });
  }
}


