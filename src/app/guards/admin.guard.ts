import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate():  boolean {
    const user = localStorage.getItem('user');
    if(user){
      const userData = JSON.parse(user);
      if(userData.role === 'admin'){
        return true;
      }
    }
    return false;
  }
  
}
